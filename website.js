window.addEventListener("load", function () {
    console.log("De pagina is geladen!");
});

document.querySelector('#box1').addEventListener('click', function() {
    console.log("Ooooh je mag niet klikken!");
    document.querySelector('#box2').innerHTML = "<h1>Dit is nu</h1><p>de tekst in Box Twee.</p>";
});
document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector('#box1').innerHTML = "<h2>welkom wereld hallo mars.</h2>";
    console.log("Ooooh je mag niet klikken!")});

let gebruiker={
    "naam": "manoa",
    "leeftijd": 17,
    "hobbys": [
        "gamen",
        "slapen",
        "eten"
    ],
    "blijft laat op maar houdt wel van slaap": true,


}
document.querySelector('#box3').innerHTML = "<h2>burh</h2>"
    console.log(gebruiker["naam"]);