<?php
session_start();
require 'flight/Flight.php';
Flight::route('/', function(){
    Flight::render('acceuil');});

Flight::route('/bru', function(){
    Flight::render('bruxelles');
});
Flight::start();

?>
