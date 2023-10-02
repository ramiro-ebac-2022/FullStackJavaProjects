/* Aplique as seguintes informações em títulos ou parágrafos com INNER HTML;
    * Tamanho de telas;
    * Profundidade de cores;
    * Caminho e porta da página;
    * Geolocalização. 
*/

document.getElementById("p1").innerHTML = "Tamanho da tela :<br>" + 
                                           " * Width  : " + screen.width + "px<br>" +
                                           " * Height : " + screen.height + "px<br>"; 
document.getElementById("p2").innerHTML = "Profundidade das cores :<br>" + 
                                           " * Color Deeph : " + screen.colorDepth;
document.getElementById("p3").innerHTML = "Caminho da página :<br>"  +
                                           " * " + window.location.pathname;
document.getElementById("p4").innerHTML = "Porta da página :<br>" +
                                           " * " + window.location.port;

const x = document.getElementById("p5");

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        x.innerHTML = "Seu navegador não possui suporte para Geolocalização!";
    }
}

function showPosition(position) {
    x.innerHTML = "Geolocalização :<br> * Latitude : " + position.coords.latitude + 
                    "<br> * Longitude : " + position.coords.longitude;
}