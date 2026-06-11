class Cs2MenuRenderer {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.options = [
            { href: 'teams.html', src: 'cs2-vertical.jpg', alt: 'Teams', text: 'TEAMS' },
            { href: 'tournaments.html', src: 'major.jpg', alt: 'Tournaments', text: 'TOURNAMENTS' },
            { href: 'cs2updates.html', src: 'cs2-updates.jfif', alt: 'Updates', text: 'UPDATES' }
        ];
    }

    init() {
        const banner = document.createElement('section');
        banner.id = 'cs2-banner';
        
        const img = document.createElement('img');
        img.src = 'banerzajaja.png';
        img.alt = 'CS2 Banner';
        banner.appendChild(img);
        this.root.appendChild(banner);

        const nav = document.createElement('section');
        nav.id = 'wybor';
        
        this.options.forEach(o => {
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
        this.root.appendChild(nav);

        const footer = document.createElement('footer');
        footer.innerHTML = '<p>Made by: Matiz Krol Szos</p>';
        this.root.appendChild(footer);
    }
}

new Cs2MenuRenderer('root').init();