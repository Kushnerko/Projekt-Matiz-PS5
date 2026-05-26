const root = document.querySelector('body');

const options = [
    { href: 'dota2_teams.html', src: 'dota2_Teams.png', alt: 'Teams', text: 'TEAMS' },
    { href: 'dota2_tournaments.html', src: 'dota2_tournaments.jpg', alt: 'Tournaments', text: 'TOURNAMENTS' },
    { href: 'dota2_updates.html', src: 'dota2_updates.jpeg', alt: 'Updates', text: 'UPDATES' }
];

const banner = document.createElement('section');
const img = document.createElement('img');
img.src = 'dota2_banner.jpg';
img.alt = 'Dota 2 Banner';
banner.appendChild(img);
root.appendChild(banner);

const nav = document.createElement('section');
nav.id = 'wybor';

options.forEach(o => {
    const a = document.createElement('a');
    a.href = o.href;
    a.className = 'wybor';

    const i = document.createElement('img');
    i.src = o.src;
    i.className = 'wybor-foty';
    i.alt = o.alt;

    const p = document.createElement('p');
    p.textContent = o.text;

    a.appendChild(i);
    a.appendChild(p);
    nav.appendChild(a);
});

root.appendChild(nav);

const footer = document.createElement('footer');
footer.innerHTML = '<p>Made by: Matiz Krol Szos</p>'; 
root.appendChild(footer);
