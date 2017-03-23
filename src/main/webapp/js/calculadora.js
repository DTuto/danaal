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
		
		botonesUnEvento($scope, event.target.id);
		botonesMemoria($scope, event.target.id);
		botonesOperaciones($scope, event.target.id);
		
		if(event.target.id == "buttonFlecha"){
			
		}else if(event.target.id == "buttonPunto" && validarAgregar($scope.resultado,".")) {
			$scope.resultado = $scope.resultado + ".";
		}
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
		$scope.valorMemoria = ""
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
			break;
		case "buttonMasMenos":
			if ($scope.resultado == "0")
				return;
			else if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = ($scope.resultado + "").substr(1);
			else
				$scope.resultado = "-" + $scope.resultado;
			break;
		case "buttonRadical":
			if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = "Entrada no valida";
			else
				$scope.resultado = Math.pow(parseFloat($scope.resultado), 1/2);
			$scope.operacionRealizada = true;
			break;
		case "buttonPorcentaje":
			break;
		default:
			if ($scope.operacionRealizada) {
				$scope.resultado = 0;
				$scope.operacionRealizada = false;
			}
			break;
	}
}

function botonesMemoria($scope, opcion) {
	switch(opcion) {
		case "buttonMC":
			$scope.valorMemoria = 0;
			break;
		case "buttonMR":
			$scope.resultado = parseFloat($scope.valorMemoria);
			break;
		case "buttonMS":
			$scope.valorMemoria = parseFloat($scope.resultado);
			break;
		case "buttonMmas":
			$scope.valorMemoria = parseFloat($scope.valorMemoria) + parseFloat($scope.resultado);
			break;
		case "buttonMmenos":
			$scope.valorMemoria = parseFloat($scope.valorMemoria) - parseFloat($scope.resultado);
			break;
		default:
			break;
	}
}

function botonesOperaciones($scope, opcion) {
	switch(opcion) {
	case "buttonDividido":
		break;
	case "buttonMultiplicado":
		break;
	case "buttonMenos":
		break;
	case "buttonMas":
		break;
	case "buttonIgual":
		$scope.operacionRealizada = true;
		break;
	case "":
		break;
	default:
		break;
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