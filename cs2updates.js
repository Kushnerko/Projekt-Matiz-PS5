document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('wybor');

    const appId = 730;
    const newsCount = 6;
    const maxLength = 250;
    
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${newsCount}&maxlength=${maxLength}&format=json`);

    fetch(proxyUrl + targetUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd sieci');
            }
            return response.json();
        })
        .then(data => {
            const steamData = JSON.parse(data.contents);
            const newsItems = steamData.appnews.newsitems;

            newsContainer.innerHTML = '';

            if(newsItems.length === 0) {
                newsContainer.innerHTML = '<p>Brak nowości w tym momencie.</p>';
                return;
            }

            newsItems.forEach(item => {
                const card = document.createElement('div');
                card.className = 'wybor';

                const date = new Date(item.date * 1000).toLocaleDateString('pl-PL');
                const defaultImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg';
                const cleanText = item.contents.replace(/<[^>]*>?/gm, '');

                card.innerHTML = `
                    <img src="${defaultImage}" alt="News Image">
                    <div class="news-content">
                        <h3>${item.title}</h3>
                        <div class="date">Opublikowano: ${date}</div>
                        <p>${cleanText}...</p>
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="read-more-btn">Czytaj dalej w Steam</a>
                    </div>
                `;

                newsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Błąd pobierania danych z API Steama:', error);
            newsContainer.innerHTML = '<p style="color: red; text-align: center; width: 100%;">Wystąpił błąd podczas ładowania aktualizacji. Spróbuj odświeżyć stronę.</p>';
        });
});