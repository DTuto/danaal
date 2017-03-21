<!DOCTYPE HTML>
<%@ include file="/WEB-INF/views/util/include.jsp" %>

<html>
	<head>
		<%@ include file="/WEB-INF/views/util/styles.jsp"%>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Página Inicio IED</title>
	</head>
	<body>
		<div>
			<table>
				<tr>
					<td colspan="1">
						<img alt="Logotipo prueba" src="images/logo_IED.png" width="150" height="120"/>
					</td>
					<td colspan="1">
						<h1> Prueba HTML, JS, CCS </h1>
					</td>
					<td colspan="2">
					</td>
					<td>
						<header>
							<nav>
								<ul>
									<li><a ref="/index.htm">Inicio</a></li>
									<li>
										<a ref="/sobreIED.htm">Sobre IED</a>
										<ul>
											<li><a ref="/index.htm">Quienes Somos</a></li>
											<li><a ref="/sobreIED.htm">Visión, Misión y valores</a></li>
											<li><a ref="/sectores.htm">Certificaciones</a></li>
											<li><a ref="/servicios.htm">Alianzas</a></li>
										</ul>
									</li>
									<li><a ref="/sectores.htm">Sectores</a></li>
									<li><a ref="/servicios.htm">Servicios</a></li>
									<li><a ref="/noticias.htm">Noticias</a></li>
									<li><a ref="/contactenos.htm">Contactenos</a></li>
								</ul>
							</nav>
						</header>
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>