const daneKategorii = [
    {
        tytul: "TEAMS",
        obrazek: "virtus.jpg",
        link: "Teams.html"
    },
    {
        tytul: "TOURNAMENTS",
        obrazek: "major.jpg",
        link: "Tournaments.html"
    },
    {
        tytul: "UPDATES",
        obrazek: "cs2-updates.jfif",
        link: "Updates.html"
    },
];
const kontenerKarty = document.getElementById("wybor");

function generujKarty() {
    let htmlDoWstawienia = ""; 

    daneKategorii.forEach(function(kategoria) {
        
        htmlDoWstawienia += `
            <a href="${kategoria.link}" class="wybor">
                <img src="${kategoria.obrazek}" alt="${kategoria.tytul}">
                <p>${kategoria.tytul}</p>    
            </a>
        `;
    });
    kontenerKarty.innerHTML = htmlDoWstawienia;
}


generujKarty();