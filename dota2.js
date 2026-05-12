const daneKategorii = [
    {
        tytul: "TEAMS",
        obrazek: "dota2-teams.jpg",
        link: "Teams.html"
    },
    {
        tytul: "TOURNAMENTS",
        obrazek: "dota2_tournaments.jpg",
        link: "Tournaments.html"
    },
    {
        tytul: "UPDATES",
        obrazek: "dota2_updates.jpeg",
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