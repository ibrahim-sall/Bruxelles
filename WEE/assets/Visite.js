var map = L.map('map').setView([50.865326, 4.356291], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var featureG = L.featureGroup();
featureG.addTo(map);

//Icones
var Icon = L.Icon.extend({
    options: {
        iconSize:     [50, 50], }
    });


var gauffresIcon = new Icon({iconUrl: 'images/gauffres.png'}),
    atomIcon = new Icon({iconUrl: 'images/Atomium.png'}),
    moule = new Icon({iconUrl: 'images/moule.png'}),
    frite = new Icon({iconUrl: 'images/frites.png'}),
    pomme = new Icon({iconUrl: 'images/pomme.png'}),
    boogie = new Icon({iconUrl: 'images/boogie.png'}),
    church = new Icon({iconUrl: 'images/church.png'}),
    bar = new Icon({iconUrl: 'images/bar.png'}),
    pis= new Icon({iconUrl: 'images/pis.png'}),
    F1 = new Icon({iconUrl: 'images/F1.png'}),
    burger = new Icon({iconUrl: 'images/burger.png'})
;


//Images
var dandoyImg = '<img src="images/dandoy.jpeg" width= 300px height = auto/>';
var pecheurImg = '<img src="images/pecheur.jpeg" width= 300px height = auto/>';
var fritlandImg = '<img src="images/fritland.jpeg" width= 300px height = auto/>';
var magImg = '<img src="images/mag.jpeg" width= 300px height = auto/>';
var egliseImg = '<img src="images/eglise.jpeg" width= 300px height = auto/>';
var TaboImg = '<img src="images/Tabora.jpeg" width= 300px height = auto/>';
var deliImg = '<img src="images/deli.jpeg" width= 300px height = auto/>';
var porteImg = '<img src="images/porte.jpeg" width= 300px height = auto/>';
var rockImg = '<img src="images/rock.jpeg" width= 300px height = auto/>';
var autoImg = '<img src="images/auto.jpeg" width= 300px height = auto/>';
var carteImg = '<img src = "images/carte.png"width= 300px height = auto/>';


//Markers
L.marker([50.84641215489564, 4.352080661521747], {icon: gauffresIcon} ).addTo(map)
    .bindPopup("<center> <a href= http://www.maisondandoy.com/>Maison Dandoy</a> </center>"+"<br> <center>Les meilleures gauffres de Bruxelles<center>"+dandoyImg);

L.marker([50.89777218879819, 4.339830812420263], {icon:atomIcon}).addTo(map)
    .bindPopup("Atome géant de 92 m en acier inoxydable. Particules reliées par des escaliers mécaniques. Expositions et vue.");

L.marker([50.84832994662816, 4.35345799439999], {icon:moule}).addTo(map)
    .bindPopup("<center> <a href=https://www.lepecheurbrussels.com/>Le Pêcheur</a><br>Restaurant de Moule (11h/23h30)</center><br>"+pecheurImg);

L.marker([50.8474983732074, 4.350656229052402], {icon:frite}).addTo(map)
    .bindPopup("<center> <a href=http://fritlandbrussels.be/acceuil>Fritland </a><br> Meilleures frites, ouvert de 11H à 1H</center><br>"+fritlandImg);

L.marker([50.84248019411167, 4.3585763240384585], {icon:pomme}).addTo(map)
    .bindPopup("<center> <a href=https://www.musee-magritte-museum.be/>Musée Magritte</a><br>Ouvert de 11h à 18h, 10€ l'entrée. Le musée raconte aussi l'histoire de la vie du bonhomme. <br>"+magImg);

L.marker([50.880071389154644, 4.355588443587053], {icon:church}).addTo(map)
    .bindPopup("<center>The Church of Our Lady of Laeken</center><br>"+egliseImg);

L.marker([50.84826530249923, 4.3516706817112105], {icon:frite}).addTo(map)
    .bindPopup("<center> <a href=https://www.instagram.com/friterie.tabora/>Friterie Tabora </a><br> Frites moins goûtues, ouvert de 11H à 6H<br> Oui, je l'ai surtout mise parcequ'il y avait un vélo en devanture...</center><br>"+TaboImg);

L.marker([50.84865517394326, 4.35386477352188], {icon:bar}).addTo(map)
    .bindPopup("<center> <a href=https://www.deliriumvillage.com/>Délirium un classique</a><br>Ferme à 4H, c'est le délirium original qui est aussi grand qu'un village (un pélerinage somme tout).<br></center>"+deliImg);

L.marker([50.84284357785347, 4.351122977034828], {icon:bar}).addTo(map)
    .bindPopup("<center> <a href=https://laportenoire.be> La porte noire</a><br> Plus de 120 bières, nombreux whiskys et rhums, ferme à 3H<br></center>"+porteImg);

L.marker([50.846848973362604, 4.3486737711806205], {icon:bar}).addTo(map)
    .bindPopup("<center> <a href=http://www.rockclassic.be/menu.php> Le Rock Classique</a><br> Bar ambiance rock avec une tite entrée bien mignonne par un tunnel, ferme à 2H<br></center>"+rockImg);

L.marker([50.86473233969477, 4.3556128692779845], {icon:bar}).addTo(map)
    .bindPopup("<center> <a href = https://www.alamortsubite.com/> La mort subite</a><br> Il y a un mini Manneken Pis, la bière est bonne est peu chère, ferme à minuit!");

L.marker([50.865584691073785, 4.347509996956625], {icon:pis}).addTo(map);
L.marker([50.84953220413133, 4.371550398909651], {icon: boogie}).addTo(map)
    .bindPopup("<center> <a href=https://www.miranobrussels.com/> Mirano</a><br> Ça à l'air un peu chicos mais avec une bonne ambiance...");

L.marker([50.97994748062247, 4.326577945807398], {icon:boogie}).addTo(map)
    .bindPopup("<center> <a href = https://www.instagram.com/flash_brussels/> Flash Club</a> <br>Boîte spécial pour Julio");

L.marker([50.8394873388465, 4.393450619362212], {icon:F1}).addTo(map)
    .bindPopup("<center> <a href = https://www.autoworld.be/en/> Autoworld </a> <br>Musée de la voiture, ouvert de 10H à 18H pour un tarif abordable de 15€. Il est juste à côté du musée de l'armée.</center><br>"+autoImg);

L.marker([50.837763989491556, 4.3486550947497475], {icon:burger}).addTo(map)
    .bindPopup("<center> Chez Béri Burgers & Ribs <br> Ouvert  jusqu'à 23H<br>"+carteImg)

