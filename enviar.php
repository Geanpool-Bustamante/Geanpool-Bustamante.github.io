<?php  
// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "gbustamantevillacorta@gmail.com";
$asunto = "Contacto desde mi Portafolio";

$carta = "De: $nombre \r \n";
$carta .= "Correo: $correo \r \n";
$carta .= "Telefono: $telefono \r \n";
$carta .= "Mensaje: $mensaje \r \n";
$carta .= "Atentamente: $nombre";

$headers ="From: $nombre <$correo>";
// Enviando Mensaje
mail($destinatario, $asunto, $carta, $headers);
header('Location:mensaje-de-envio.html');
?>

