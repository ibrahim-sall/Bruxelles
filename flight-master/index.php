<?php
session_start();
require 'flight/Flight.php';
Flight::route('/', function(){
    Flight::render('acceuil');});

// Flight::route('/today', function () {
//     $date = new DateTimeImmutable();
//     $moisFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
//     'août', 'septembre', 'octobre', 'novembre', 'décembre'];
//     $joursFr = ["2" => 'lundi', "3"=>'mardi', "4" =>'mercredi', '5' =>'jeudi', '6'=>'vendredi', '7'=>'samedi','1'=> 'dimanche'];
//     $jour = date("N");
//     $mois = date("m");
//     $anne = date("y");
//     $num_jour = date("d");
//     $date = "<p>Nous sommes le : ".$joursFr[$jour]." "."$num_jour"." ".$moisFr[$mois-1]." 20".$anne."</p>";
//     Flight::render('today', ['date' => $date]);
// });



Flight::route('GET /login', function(){
    // if(isset($_GET['deco'])){
    //     $_SESSION = [];
    // }
    if(isset($_SESSION['user']) && !empty($_SESSION['user']))
    {
    Flight::render('login', ['log' => $_SESSION['user']]);}
    else{
        Flight::render('login', ['log' => null]);
    }});


Flight::route('POST /login', function(){
    $_SESSION['user'] = $_POST['user'];
    Flight::render('login', ['log' =>$_SESSION['user']]);});


$link = mysqli_connect('localhost', 'root', 'root', 'geobase', 8889);

Flight::set('db', $link);

Flight::route('/departements', function(){
    $connect = Flight::get('db');
    $results = mysqli_query($connect, "
    SELECT nom, insee FROM departements ORDER BY nom;");
    $results2 = mysqli_query($connect, "
    SELECT nom, insee FROM regions ORDER BY nom;");
    $tab = [];
    $tab2 = []; 
    foreach($results as $key => $elem){
        $tab[] =$elem;
    }
    foreach($results2 as $key => $elem){
        $tab2[] =$elem;
    }
    Flight::render('departements', ['req' => [$tab, $tab2]]);
});

Flight::route('/script', function(){
    Flight::render('script');
});
Flight::route('/map', function(){
    Flight::render('map');
});
Flight::route('/today', function(){
    Flight::render('today');
});

Flight::route('POST /villes', function(){
    $connect = Flight::get('db');
    if(isset($_POST['recherche'])){
        $results_com = mysqli_query($connect, "SELECT nom, insee FROM communes where nom 
        LIKE '".$_POST['recherche']."%' ORDER by nom LIMIT 10;");
        $com = [];
        foreach($results_com as $key => $c){
            $com[] = $c;
        }
        Flight::json(['id'=>$com]);
    }
});

Flight::route('/bru', function(){
    Flight::render('bruxelles');
});
Flight::start();

?>
