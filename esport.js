class MainPageRenderer {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.games = [
            { href: 'cs2.html', src: 'cs2-theme.jpg', alt: 'CS2', title: 'Counter-Strike 2' },
            { href: 'dota2.html', src: 'dota2-theme.jpg', alt: 'Dota 2', title: 'DOTA2' }
        ];
    }

    init() {
        this.renderBanner();
        this.renderGamesSection();
        this.renderFooter();
    }

    renderBanner() {
        const bannerSection = document.createElement('section');
        bannerSection.id = 'banner';

        const bannerImg = document.createElement('img');
        bannerImg.src = 'banner.png';
        bannerImg.id = 'MatizBanner';
        bannerImg.alt = 'Matiz E-Sport Banner';

        bannerSection.appendChild(bannerImg);
        this.root.appendChild(bannerSection);
    }

    renderGamesSection() {
        const grySection = document.createElement('section');
        grySection.id = 'gry';

        this.games.forEach(game => {
            const link = document.createElement('a');
            link.href = game.href;

            const div = document.createElement('div');
            div.className = 'gry';

            const img = document.createElement('img');
            img.src = game.src;
            img.className = 'gry-foty';
            img.alt = game.alt;

            const p = document.createElement('p');
            p.textContent = game.title;

            div.appendChild(img);
            div.appendChild(p);
            link.appendChild(div);

            grySection.appendChild(link);
        });

        this.root.appendChild(grySection);
    }

    renderFooter() {
        const footer = document.createElement('footer');
        
        const contactLink = document.createElement('a');
        contactLink.href = 'contact.html';
        contactLink.textContent = 'Kliknij tutaj, aby przejść do formularza kontaktowego';
        
        const pFooter = document.createElement('p');
        pFooter.textContent = 'Made by: Matiz Krol Szos';
        
        footer.appendChild(contactLink);
        footer.appendChild(pFooter);
        
        this.root.appendChild(footer);
    }
}

const app = new MainPageRenderer('root');
app.init();