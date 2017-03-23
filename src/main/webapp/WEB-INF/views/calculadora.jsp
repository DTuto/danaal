<!DOCTYPE HTML>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
		<script src="js/calculadora.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="css/estiloCalculadora.css">
		<title>Calculadora</title>
	</head>
	<body>
		<input type="hidden" name="valorSession" id="valorSession">
		<input type="hidden" name="operacionRealizada" id="operacionRealizada">
		<input type="hidden" name="valorMemoria" id="valorMemoria">
		
		<div class="container" ng-app="calculadora" ng-controller="calculadoraCtrl">
			<div class="container styleContainer">
				<div class="w3-dropdown-hover">
					<button class="w3-button styleDropdown">Ver</button>
				    <div class="w3-dropdown-content w3-bar-block w3-card-4">
				    	<a href="#" class="w3-bar-item w3-button">Estandar</a>
				      	<a href="#" class="w3-bar-item w3-button">Cientifica</a>
				      	<a href="#" class="w3-bar-item w3-button">Programadora</a>
					</div>
				</div>
				<div class="w3-dropdown-hover">
					<button class="w3-button styleDropdown">Edición</button>
				    <div class="w3-dropdown-content w3-bar-block w3-card-4">
				    	<a href="#" class="w3-bar-item w3-button">Copiar</a>
				      	<a href="#" class="w3-bar-item w3-button">Pegar</a>
					</div>
				</div>
				<div class="w3-dropdown-hover">
					<button class="w3-button styleDropdown">Ayuda</button>
				    <div class="w3-dropdown-content w3-bar-block w3-card-4">
				    	<a href="#" class="w3-bar-item w3-button">Ver ayuda</a>
				      	<a href="#" class="w3-bar-item w3-button">Acerca de la calculadora</a>
					</div>
				</div>
			</div>
			<div>
				<input id="result" class="styleResult" type="text" ng-model="resultado" 
					placeholder="0" maxlength="50" disabled>
			</div>
			<div>
				<div>
					<button class="btn btn-default btn-md buttonSimple" 
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMC">
						MC
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMR">
						MR
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMS">
						MS
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMmas">
						M+
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMmenos">
						M-
					</button>
				</div>
				<div>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonFlecha">
						&larr;
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonCE">
						CE
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonC">
						C
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMasMenos">
						&plusmn;
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonRadical">
						&radic;
					</button>
				</div>
				<div>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button7">
						7
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button8">
						8
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button9">
						9
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonDividido">
						/
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonPorcentaje">
						%
					</button>
				</div>
				<div>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button4">
						4
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button5">
						5
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button6">
						6
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMultiplicado">
						*
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button1Sobrex">
						1/x
					</button>
				</div>
				<div>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button1">
						1
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button2">
						2
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="button3">
						3
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMenos">
						-
					</button>
					<button type="button" class="btn btn-default btn-md buttonDobleVertical"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonIgual">
						=
					</button>
				</div>
				<div>
					<button type="button" class="btn btn-default btn-md buttonDobleHorizontal"
							ng-click="buttonPress($event)" data-ng-attr-id="button0">
						0
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonPunto">
						.
					</button>
					<button type="button" class="btn btn-default btn-md buttonSimple"
							ng-click="buttonPress($event)" data-ng-attr-id="buttonMas">
						+
					</button>
				</div>
			</div>
		</div>
	</body>
</html>