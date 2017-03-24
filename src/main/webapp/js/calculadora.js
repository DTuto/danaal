var app = angular.module("calculadora", []);

app.controller("calculadoraCtrl", function($scope) {
	
	iniciarDatos($scope);
	
	$scope.buttonPress = function(event) {
		if(event.target.id == "buttonCE"){
			$scope.resultado = "0";
			return;
		}if(event.target.id == "buttonC"){
			$scope.valorSession = "";
			$scope.resultado = "0";
			return;
		}if($scope.resultado == "No se puede dividir entre cero"
				|| $scope.resultado == "Resultado indefinido"
				|| $scope.resultado == "Entrada no valida") {
			return;
		}
		if(event.target.id == "buttonFlecha"){
			if($scope.operacionRealizada)
				return;
			var tamanyo = ($scope.resultado + "").length;
			if(tamanyo <= 1){
				$scope.resultado = "0";
				return;
			}
			$scope.resultado = ($scope.resultado + "").substr(0, tamanyo - 1);
			
		}else if(event.target.id == "buttonPunto" && validarAgregar($scope.resultado,".")) {
			$scope.resultado = $scope.resultado + ".";
		}
		if(botonesOperaciones($scope, event.target.id))
			return;
		if(botonesMemoria($scope, event.target.id))
			return;
		if(botonesUnEvento($scope, event.target.id))
			return;
		accionesBotonesNumeros($scope, event.target.id);
	};
});

function iniciarDatos($scope) {
	if($scope.valorSession == null) {
		$scope.valorSession = "0";
	}
	if($scope.resultado == null) {
		$scope.resultado = "0";
	}
	if($scope.valorMemoria == null) {
		$scope.valorMemoria = "0";
	}
}

function botonesUnEvento($scope, opcion) {
	switch(opcion) {
		case "button1Sobrex":
			if($scope.resultado == "" || $scope.resultado == "0")
				$scope.resultado = "No se puede dividir entre cero";
			else{
				$scope.resultado = 1 / parseFloat($scope.resultado);
			}
			$scope.operacionRealizada = true;
			return true;
		case "buttonMasMenos":
			if ($scope.resultado == "0")
				return;
			else if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = ($scope.resultado + "").substr(1);
			else
				$scope.resultado = "-" + $scope.resultado;
			return true;
		case "buttonRadical":
			if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = "Entrada no valida";
			else
				$scope.resultado = Math.pow(parseFloat($scope.resultado), 1/2);
			$scope.operacionRealizada = true;
			return true;
		case "buttonPorcentaje":
			return true;
		default:
			if ($scope.operacionRealizada) {
				$scope.resultado = 0;
				$scope.operacionRealizada = false;
			}
			return false;
	}
}

function botonesMemoria($scope, opcion) {
	switch(opcion) {
		case "buttonMC":
			$scope.valorMemoria = 0;
			return true;
		case "buttonMR":
			$scope.resultado = parseFloat($scope.valorMemoria);
			return true;
		case "buttonMS":
			$scope.valorMemoria = parseFloat($scope.resultado);
			return true;
		case "buttonMmas":
			$scope.valorMemoria = parseFloat($scope.valorMemoria) + parseFloat($scope.resultado);
			return true;
		case "buttonMmenos":
			$scope.valorMemoria = parseFloat($scope.valorMemoria) - parseFloat($scope.resultado);
			return true;
		default:
			return false;
	}
}

function realizarOperacion($scope) {
	switch($scope.operacion) {
		case "/":
			$scope.resultado = parseFloat($scope.valorMemoria + "")/parseFloat($scope.resultado + "");
			$scope.valorMemoria = "0";
			break;
		case "*":
			$scope.resultado = parseFloat($scope.valorMemoria + "")*parseFloat($scope.resultado + "");
			$scope.valorMemoria = "0";
			break;
		case "+":
			$scope.resultado = parseFloat($scope.valorMemoria + "")+parseFloat($scope.resultado + "");
			$scope.valorMemoria = "0";
			break;
		case "-":
			$scope.resultado = parseFloat($scope.valorMemoria + "")-parseFloat($scope.resultado + "");
			$scope.valorMemoria = "0";
			break;
		default:
			break;
	}
}

function realizarValidarOperacion($scope) {
	if(($scope.valorMemoria + "") == ($scope.resultado + ""))
		return;
	if(($scope.valorMemoria + "") == "0"){
		$scope.valorMemoria = $scope.resultado;
		return;
	}
	realizarOperacion($scope);
}

function botonesOperaciones($scope, opcion) {
	switch(opcion) {
		case "buttonDividido":
			$scope.operacion = "/";
			realizarValidarOperacion($scope);
			$scope.operacionRealizada = true;
			return true;
		case "buttonMultiplicado":
			$scope.operacion = "*";
			realizarValidarOperacion($scope);
			$scope.operacionRealizada = true;
			return true;
		case "buttonMenos":
			$scope.operacion = "-";
			realizarValidarOperacion($scope);
			$scope.operacionRealizada = true;
			return true;
		case "buttonMas":
			$scope.operacion = "+";
			realizarValidarOperacion($scope);
			$scope.operacionRealizada = true;
			return true;
		case "buttonIgual":
			$scope.operacionRealizada = true;
			return true;
		case "":
			return true;
		default:
			return false;
	}
}

function accionesBotonesNumeros($scope, opcion) {
	var numero;
	switch(opcion) {
		case "button0":
			numero = 0;
			break;
		case "button1":
			numero = 1;
			break;
		case "button2":
			numero = 2;
			break;
		case "button3":
			numero = 3;
			break;
		case "button4":
			numero = 4;
			break;
		case "button5":
			numero = 5;
			break;
		case "button6":
			numero = 6;
			break;
		case "button7":
			numero = 7;
			break;
		case "button8":
			numero = 8;
			break;
		case "button9":
			numero = 9;
			break;
		default:
			return;
	}
	if($scope.resultado == "0")
		$scope.resultado = numero;
	else if(validarAgregar($scope.resultado, numero))
		$scope.resultado += "" + numero;
}

function validarAgregar(resultado, valor) {
	if(valor == "." && ((resultado + "").indexOf(".") > -1))
		return false;
	if(resultado == "0" && valor == "0")
		return false;
	return true;
}