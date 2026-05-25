class TeamRenderer {
    constructor(id) {
        this.container = document.getElementById(id);
        this.apiUrl = 'https://api-op.grid.gg/central-data/graphql';
        this.apiKey = 'KntsKjzu4K3GNHgiOtjmcLQCPHJgMXotU3EdUopz';
        this.cursor = null;
        this.loading = false;
        this.observer = new IntersectionObserver((e) => {
            if (e[0].isIntersecting && !this.loading) this.fetchData();
        }, { threshold: 0.1 });
    }

    init() {
        
        this.container.innerHTML = `
            <header id="cs2-header"><img src="teams-banner.jpg" onerror="this.src='https://placehold.co/1920x400/12161f/e58d26?text=TEAMS+BANNER'"></header>
            <div id="search-wrapper"><input type="text" id="team-search" placeholder="Wyszukaj..."></div>
            <section id="teams-grid"></section>
            <div id="scroll-trigger"></div>
            <footer><p>Made by: Matiz Krol Szos</p></footer>
        `;
        
        document.getElementById("team-search").addEventListener("input", (e) => {
            const f = e.target.value.toLowerCase();
            document.querySelectorAll(".team-card").forEach(c => {
                c.style.display = c.textContent.toLowerCase().includes(f) ? "flex" : "none";
            });
        });

        this.observer.observe(document.getElementById("scroll-trigger"));
    }

    fetchData() {
        this.loading = true;
        const query = { query: `query { teams(first: 9, after: ${this.cursor ? '"'+this.cursor+'"' : null}) { pageInfo { endCursor } edges { node { name logoUrl } } } }` };

        fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': this.apiKey },
            body: JSON.stringify(query)
        })
        .then(res => res.json())
        .then(data => {
            const teams = data.data.teams;
            this.cursor = teams.pageInfo.endCursor;
            this.render(teams.edges.map(e => e.node));
            this.loading = false;
        })
        .catch(() => this.loading = false);
    }

    render(teams) {
        const grid = document.getElementById("teams-grid");
        
        teams.forEach(t => {
            const card = document.createElement("div"); 
            card.className = "team-card"; 

            const img = document.createElement("img"); 
            img.src = t.logoUrl || "https://placehold.co/320x180/1a1124/e58d26?text=" + encodeURIComponent(t.name);
            img.alt = t.name;

            const content = document.createElement("div"); 
            content.className = "card-content";

            const h3 = document.createElement("h3"); 
            h3.textContent = t.name; 

            
            content.appendChild(h3);
            card.appendChild(img);
            card.appendChild(content);
            grid.appendChild(card);
        });
    }
}

new TeamRenderer("root").init();