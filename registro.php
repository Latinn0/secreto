<?php
include("db.php");

$nombre = $_POST['nombre'];
$apodo = $_POST['apodo'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$archivar="INSERT INTO registro (nombre, apodo, email, pass) VALUES ('$nombre', '$apodo','$email', '$pass')";
 mysqli_query($conexion, $archivar);

header("location: login.php");


 ?>
