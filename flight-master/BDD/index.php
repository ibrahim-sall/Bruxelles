<?php
require '../flight/Flight.php';
$link = mysqli_connect('localhost/8889', 'geo', '', 'geobase');

if (!$link) {
  die('Erreur de connexion');
} else {
  echo 'Succès... ';
}
Flight::set('geobase', $var);
Flight::get('geobase');
Flight::start();
?>