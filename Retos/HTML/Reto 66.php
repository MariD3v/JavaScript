<?php
function validarDNI($dni) {
    $letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    $numero = substr($dni, 0, 8);
    $letra = strtoupper(substr($dni, -1));
    return ($letras[$numero % 23] === $letra);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $dni = $_POST["dni"];

    if (validarDNI($dni)) {
        echo json_encode(["nombre" => $nombre, "dni" => $dni]);
    } else {
        echo json_encode(["nombre" => "Error en dni", "dni" => $dni]);
    }
}
?>
