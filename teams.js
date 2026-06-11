document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('wybor');
  const searchInput = document.getElementById('team-search');
  const apiKey = 'XUhc-Zga-OAHW_ZqmssB6Jq_Asrs-Ztepg_AdJozRpDM_gsotFg';
  const proxyUrl = 'https://corsproxy.io/?';
  const limit = 20;
  let page = 1;
  let loading = false;
  let hasMore = true;

  const createCard = (team) => {
    const players = (team.players || []).map(p => p.name).join(', ') || 'Brak danych';
    const location = team.location || 'Nieznany';
    const acronym = team.acronym || 'BRAK';
    const imageUrl = team.image_url || 'https://placehold.co/600x300/0b0e14/ff8c00?text=CS2+TEAM';
    const link = `https://liquipedia.net/counterstrike/Special:Search?search=${encodeURIComponent(team.name)}`;

    return `
      <div class="wybor">
        <img src="${imageUrl}" alt="${team.name}" onerror="this.src='https://placehold.co/600x300/0b0e14/ff8c00?text=CS2+TEAM'">
        <div class="news-content">
          <h3>${team.name}</h3>
          <div class="date">ID: ${team.id} · ${acronym}</div>
          <p>Skład: ${players}<br>Kraj: ${location}<br>Status: Aktywna</p>
          <a href="${link}" target="_blank" rel="noopener noreferrer" class="read-more-btn">Zobacz w Liquipedia</a>
        </div>
      </div>
    `;
  };

  const loadTeams = () => {
    if (loading || !hasMore) return;
    loading = true;
    const targetUrl = encodeURIComponent(`https://api.pandascore.co/csgo/teams?per_page=${limit}&page=${page}&sort=-modified_at&token=${apiKey}`);

    fetch(proxyUrl + targetUrl)
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then(data => {
        const results = data || [];
        const teams = results.filter(team => team.image_url && team.players?.length >= 4);

        if (page === 1) {
          newsContainer.innerHTML = teams.length ? teams.map(createCard).join('') : '<p style="text-align:center;width:100%;">Brak drużyn do wyświetlenia.</p>';
        } else {
          newsContainer.insertAdjacentHTML('beforeend', teams.map(createCard).join(''));
        }

        hasMore = results.length === limit;
        page += 1;
      })
      .catch(() => {
        if (page === 1) {
          newsContainer.innerHTML = '<p style="color:red;text-align:center;width:100%;">Wystąpił błąd podczas ładowania drużyn. Spróbuj odświeżyć stronę.</p>';
        }
        hasMore = false;
      })
      .finally(() => {
        loading = false;
      });
  };

  const onScroll = () => {
    if (!hasMore || loading) return;
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.offsetHeight - 200;
    if (scrollPosition >= threshold) {
      loadTeams();
    }
  };

  const filterCards = (value) => {
    const filter = value.toLowerCase();
    document.querySelectorAll('.wybor').forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(filter) ? 'flex' : 'none';
    });
  };

  loadTeams();
  window.addEventListener('scroll', onScroll);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => filterCards(e.target.value));
  }
});