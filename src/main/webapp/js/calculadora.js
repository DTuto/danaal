var app = angular.module("calculadora", []);

app.controller("calculadoraCtrl", function($scope) {
	
	if($scope.valorSession == null) {
		$scope.valorSession = 0;
	}
	if($scope.resultado == null) {
		$scope.resultado = "0";
	}
	
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
		
		if(event.target.id == "button1Sobrex"){
			if($scope.resultado == "" || $scope.resultado == "0")
				$scope.resultado = "No se puede dividir entre cero";
			else{
				$scope.resultado = 1 / $scope.resultado;
			}
			$scope.operacionRealizada = true;
		}else if(event.target.id == "buttonMasMenos"){
			if ($scope.resultado == "0")
				return;
			else if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = $scope.resultado.substr(1);
			else
				$scope.resultado = "-" + $scope.resultado;
		}else if(event.target.id == "buttonRadical"){
			if (($scope.resultado + "").indexOf("-") > -1)
				$scope.resultado = "Entrada no valida";
			else
				$scope.resultado = Math.pow($scope.resultado, 1/2);
			$scope.operacionRealizada = true;
		}else if ($scope.operacionRealizada) {
			$scope.resultado = 0;
			$scope.operacionRealizada = false;
		}
		
		if(event.target.id == "buttonMC"){
			
		}else if(event.target.id == "buttonMR"){
			
		}else if(event.target.id == "buttonMS"){
			
		}else if(event.target.id == "buttonMmas"){
			
		}else if(event.target.id == "buttonMmenos"){
			
		}else if(event.target.id == "buttonFlecha"){
			
		}else if(event.target.id == "buttonPorcentaje"){
			
		}else if(event.target.id == "buttonDividido"){
			
		}else if(event.target.id == "buttonMultiplicado"){
			
		}else if(event.target.id == "buttonMenos"){
			
		}else if(event.target.id == "buttonMas"){
			
		}else if(event.target.id == "buttonIgual"){
			$scope.operacionRealizada = true;
		}else if(event.target.id == "buttonPunto"){
			if($scope.resultado == "")
				$scope.resultado = "0.";
			else
				if(validarAgregar($scope.resultado,"."))
					$scope.resultado = $scope.resultado + ".";
		}else if(event.target.id == "button0"){
			if(validarAgregar($scope.resultado,0))
				$scope.resultado = $scope.resultado + "" + 0;
		}else if(event.target.id == "button1"){
			if($scope.resultado == "0")
				$scope.resultado = 1;
			else if(validarAgregar($scope.resultado,1))
				$scope.resultado = $scope.resultado + "" + 1;
		}else if(event.target.id == "button2"){
			if($scope.resultado == "0")
				$scope.resultado = 2;
			else if(validarAgregar($scope.resultado,2))
				$scope.resultado = $scope.resultado + "" + 2;
		}else if(event.target.id == "button3"){
			if($scope.resultado == "0")
				$scope.resultado = 3;
			else if(validarAgregar($scope.resultado,3))
				$scope.resultado = $scope.resultado + "" + 3;
		}else if(event.target.id == "button4"){
			if($scope.resultado == "0")
				$scope.resultado = 4;
			else if(validarAgregar($scope.resultado,4))
				$scope.resultado = $scope.resultado + "" + 4;
		}else if(event.target.id == "button5"){
			if($scope.resultado == "0")
				$scope.resultado = 5;
			else if(validarAgregar($scope.resultado,5))
				$scope.resultado = $scope.resultado + "" + 5;
		}else if(event.target.id == "button6"){
			if($scope.resultado == "0")
				$scope.resultado = 6;
			else if(validarAgregar($scope.resultado,6))
				$scope.resultado = $scope.resultado + "" + 6;
		}else if(event.target.id == "button7"){
			if($scope.resultado == "0")
				$scope.resultado = 7;
			else if(validarAgregar($scope.resultado,7))
				$scope.resultado = $scope.resultado + "" + 7;
		}else if(event.target.id == "button8"){
			if($scope.resultado == "0")
				$scope.resultado = 8;
			else if(validarAgregar($scope.resultado,8))
				$scope.resultado = $scope.resultado + "" + 8;
		}else if(event.target.id == "button9"){
			if($scope.resultado == "0")
				$scope.resultado = 9;
			else if(validarAgregar($scope.resultado,9))
				$scope.resultado = $scope.resultado + "" + 9;
		}
		else;
	};
});

function validarAgregar(resultado, valor) {
	if(valor == "." && (resultado.indexOf(".") > -1))
		return false;
	if(resultado == "0" && valor == "0")
		return false;
	return true;
}