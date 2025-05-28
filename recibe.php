<?php
$con = mysqli_connect('localhost', 'root', '', 'sams_gym') or die('Error en la conexión con el servidor local');

$nombre = mysqli_real_escape_string($con, $_POST["nombre"]);
$calificacion_m = (int) $_POST["calificacion_m"];
$atencion = mysqli_real_escape_string($con, $_POST["atencion"]);
$opinion_tarifas = mysqli_real_escape_string($con, $_POST["opinion_tarifas"]);
$satisfecho = mysqli_real_escape_string($con, $_POST["satisfecho"]);
$motivo = mysqli_real_escape_string($con, $_POST["motivo"]);
$sugerencias = mysqli_real_escape_string($con, $_POST["sugerencias"]);

$sql = "INSERT INTO encuesta_clientes (
    id, nombre, calificacion_m, atencion, opinion_tarifas, satisfecho, motivo, sugerencias
) VALUES (
    null, '$nombre', $calificacion_m, '$atencion', '$opinion_tarifas', '$satisfecho', '$motivo', '$sugerencias'
)";

$resultado = mysqli_query($con, $sql) or die("Error al insertar en la base de datos");

mysqli_close($con);
?>

<script>
location.href = 'index.html';
</script>