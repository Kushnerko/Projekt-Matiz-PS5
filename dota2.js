document.title = "Dota 2 Esport Site";

document.body.style.backgroundColor = "#0d1420"; 
document.body.style.margin = "0"; 
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

const linkCss = document.createElement("link");
linkCss.rel = "stylesheet";
linkCss.href = "dota2.css";
document.head.appendChild(linkCss);


const sekcjaBanner = document.createElement("section");
sekcjaBanner.id = "dota2-banner";

const imgBanner = document.createElement("img");
imgBanner.src = "dota2_banner.jpg"; 
imgBanner.id = "dota2Banner";
imgBanner.alt = "Dota 2 Banner";
imgBanner.style.width = "100%"; 
imgBanner.style.display = "block";

sekcjaBanner.appendChild(imgBanner);
document.body.appendChild(sekcjaBanner);


const sekcjaWybor = document.createElement("section");
sekcjaWybor.id = "wybor";

const lista = document.createElement("ul");
lista.style.listStyleType = "none";
lista.style.padding = "0";
lista.style.display = "flex";
lista.style.justifyContent = "center";
lista.style.gap = "20px"; 
lista.style.marginTop = "40px";

const kategorie = [
    { nazwa: "TEAMS", obrazek: "dota2_teams.png", link: "dota2teams.html" },
    { nazwa: "TOURNAMENTS", obrazek: "dota2_tournaments.jpg", link: "dota2tournaments.html" },
    { nazwa: "UPDATES", obrazek: "dota2_updates.jpeg", link: "dota2updates.html" }
];

kategorie.forEach(kategoria => {
    const li = document.createElement("li");
    
    li.style.width = "280px";
    li.style.backgroundColor = "#000000"; 
    li.style.borderRadius = "10px"; 
    li.style.overflow = "hidden"; 
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.cursor = "pointer";
    li.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    li.style.transition = "transform 0.2s"; 

    const imgKategoria = document.createElement("img");
    imgKategoria.src = kategoria.obrazek;
    imgKategoria.alt = kategoria.nazwa;
    imgKategoria.style.width = "100%";
    imgKategoria.style.height = "160px";
    imgKategoria.style.objectFit = "cover"; 
    imgKategoria.style.borderBottom = "4px solid #f5911f";

    const dolnyPasek = document.createElement("div");
    dolnyPasek.style.height = "50px";
    dolnyPasek.style.display = "flex";
    dolnyPasek.style.alignItems = "center";
    dolnyPasek.style.justifyContent = "center";
    
    const spanTekst = document.createElement("span");
    spanTekst.textContent = kategoria.nazwa;
    spanTekst.style.color = "#ffffff"; 
    spanTekst.style.fontFamily = "Arial, sans-serif";
    spanTekst.style.fontWeight = "bold";
    spanTekst.style.letterSpacing = "1px";

    dolnyPasek.appendChild(spanTekst);

    li.appendChild(imgKategoria);
    li.appendChild(dolnyPasek);
    
    li.addEventListener("click", () => {
        window.location.href = kategoria.link;
    });
    
    li.addEventListener("mouseover", () => li.style.transform = "scale(1.05)");
    li.addEventListener("mouseout", () => li.style.transform = "scale(1)");

    lista.appendChild(li); 
});

sekcjaWybor.appendChild(lista);
document.body.appendChild(sekcjaWybor);


const stopka = document.createElement("footer");

stopka.style.marginTop = "auto"; 
stopka.style.width = "100%";
stopka.style.backgroundColor = "#050a12";
stopka.style.padding = "20px 0";

const paragrafStopki = document.createElement("p");
paragrafStopki.textContent = "Made by: Matiz Krol Szos";
paragrafStopki.style.color = "#888888";
paragrafStopki.style.textAlign = "center";
paragrafStopki.style.margin = "0";
paragrafStopki.style.fontFamily = "Arial, sans-serif";
paragrafStopki.style.fontSize = "14px";

stopka.appendChild(paragrafStopki);
document.body.appendChild(stopka);