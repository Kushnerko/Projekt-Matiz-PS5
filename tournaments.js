document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('wybor');
  const searchInput = document.getElementById('team-search');
  const apiKey = 'XUhc-Zga-OAHW_ZqmssB6Jq_Asrs-Ztepg_AdJozRpDM_gsotFg';
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = encodeURIComponent(`https://api.pandascore.co/csgo/tournaments?per_page=12&sort=-begin_at&token=${apiKey}`);

  fetch(proxyUrl + targetUrl)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      const tournaments = (data || []);
      newsContainer.innerHTML = '';

      if (!tournaments.length) {
        newsContainer.innerHTML = '<p style="text-align:center;width:100%;">Brak turniejów do wyświetlenia.</p>';
        return;
      }

      tournaments.forEach(item => {
        const beginDate = item.begin_at ? new Date(item.begin_at).toLocaleDateString('pl-PL') : 'Brak daty';
        const endDate = item.end_at ? new Date(item.end_at).toLocaleDateString('pl-PL') : 'TBA';
        const imageUrl = item.league?.image_url || 'https://placehold.co/600x300/0b0e14/ff8c00?text=CS2+TOURNAMENT';
        const leagueName = item.league?.name || 'Nieznana liga';
        const prize = item.prizepool || 'Brak informacji';
        const tier = item.tier ? item.tier.toUpperCase() : 'N/A';
        const teamsCount = item.teams?.length || 0;
        const matchesCount = item.matches?.length || 0;
        const link = `https://liquipedia.net/counterstrike/Special:Search?search=${encodeURIComponent(item.name)}`;

        const details = [
          `Oficjalny turniej <strong>${item.name}</strong> organizowany w ramach rozgrywek <strong>${leagueName}</strong>.`,
          `Wydarzenie posiada rangę <strong>${tier}</strong>.`,
          teamsCount ? `Do walki o główną nagrodę staje ${teamsCount} drużyn.` : '',
          matchesCount ? `W ramach tego etapu rozegranych zostanie ${matchesCount} spotkań.` : '',
          `Całkowita pula nagród w tych rozgrywkach wynosi ${prize}.`,
        ].filter(Boolean).join(' ');

        newsContainer.insertAdjacentHTML('beforeend', `
          <div class="wybor">
            <img src="${imageUrl}" alt="${item.name}" onerror="this.src='https://placehold.co/600x300/0b0e14/ff8c00?text=CS2+TOURNAMENT'">
            <div class="news-content">
              <h3>${leagueName} - ${item.name}</h3>
              <div class="date">Czas trwania: ${beginDate} - ${endDate}</div>
              <p>${details}</p>
              <a href="${link}" target="_blank" rel="noopener noreferrer" class="read-more-btn">Czytaj dalej na Liquipedia</a>
            </div>
          </div>
        `);
      });
    })
    .catch(() => {
      newsContainer.innerHTML = '<p style="color:red;text-align:center;width:100%;">Wystąpił błąd podczas ładowania turniejów. Spróbuj odświeżyć stronę.</p>';
    });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const filter = e.target.value.toLowerCase();
      document.querySelectorAll('.wybor').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(filter) ? 'flex' : 'none';
      });
    });
  }
});