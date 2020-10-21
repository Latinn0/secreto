<?php

include("conexion.php");

$solicitud = "CREATE TABLE mataculos (ID int NOT NULL AUTO_INCREMENT, Nombre varchar(50), PRIMARY KEY(ID))";
$resultado = mysqli_query($conexion, $solicitud);

 ?>