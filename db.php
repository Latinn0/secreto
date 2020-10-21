<?php
 $usuario = "root";
 $password = "";
 $servidor = "localhost";
 $basededatos = "secreto";

$conexion = mysqli_connect( $servidor, $usuario, $password, $basededatos ) ;


if (!$conexion) {
  die("Connection failed: " . mysqli_connect_error());
}





?>