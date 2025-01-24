const suggestionsList = [
    "Sonstiges.html",
    "Shop.html",
    "Bibilothek.html",
    "Best Websites for free Browser Games.html",
    "canvas.html",
    "community tab.html",
    "Cookie-clicker.html",
    "Geschichte-Olcay.html",
    "Ghost.html",
    "impressum.html",
    "index.html",
    "JavaScript.html",
    "Lalo Salamanca.html",
    "SIMPLE_SNAKE_GAME.html",
    "Sonstige-Informationen.html",
    "Trevor Phillips Industrie.html",
    "Tschick.html",
    "William Afton.html",
    "fiktive biografie.html",
    "uncharted.html",
    "Dexter Morgan.html",
];

// Funktion, um Vorschläge anzuzeigen
function showSuggestions() {
    const input = document.getElementById('search');
    const suggestionsContainer = document.getElementById('suggestions');
    const query = input.value.toLowerCase();

    // Leere die vorherigen Vorschläge
    suggestionsContainer.innerHTML = '';

    if (query) {
        // Filter die Vorschläge
        const filteredSuggestions = suggestionsList.filter(suggestion =>
            suggestion.toLowerCase().includes(query)
        );

        // Füge die gefilterten Vorschläge hinzu
        filteredSuggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.className = 'suggestion';
            div.textContent = suggestion;
            div.onclick = () => {
                input.value = suggestion; // Setze den Wert des Eingabefelds
                suggestionsContainer.innerHTML = ''; // Leere die Vorschläge
            };
            suggestionsContainer.appendChild(div);
        });
    }
}

function search2() {
    const query = document.getElementById('search').value.trim();

    const seitenDaten = [
        {
            strichwörter: "Sonstiges",
            url: "Sonstiges.html"
        }, {
            strichwörter: "Shop",
            url: "Shop.html"
        }, {
            strichwörter: "Bibilothek",
            url: "Bibilothek.html"
        }, {
            strichwörter: "Best Websites for free Browser Games",
            url: "Best Websites for free Browser Games.html"
        }, {
            strichwörter: "canvas",
            url: "canvas.html"
        },{
            strichwörter: "Chat GPT Website",
            url: "Chat GPT Website.html"
        }, {
            strichwörter: "community tab",
            url: "community tab.html"
        }, {
            strichwörter: "Cookie-clicker Original",
            url: "Cookie-clicker Original.html"
        }, {
            strichwörter: "Cookie-clicker",
            url: "Cookie-clicker.html"
        }, {
            strichwörter: "Geschichte",
            url: "Geschichte-Olcay.html"
        }, {
            strichwörter: "Ghost",
            url: "Ghost.html"
        }, {
            strichwörter: "impressum",
            url: "impressum.html"
        },{
            strichwörter: "Startseite",
            url: "index.html"
        }, {
            strichwörter: "JavaScript",
            url: "JavaScript.html"
        }, {
            strichwörter: "Lalo Salamanca",
            url: "Lalo Salamanca.html"
        }, {
            strichwörter: "SIMPLE_SNAKE_GAME",
            url: "SIMPLE_SNAKE_GAME.html"
        },{
            strichwörter: "Sonstige-Informationen",
            url: "Sonstige-Informationen.html"
        }, {
            strichwörter: "community tab",
            url: "community tab.html"
        }, {
            strichwörter: "stundenplan",
            url: "stundenplan.html"
        }, {
            strichwörter: "Trevor Phillips Industrie",
            url: "Trevor Phillips Industrie.html"
        }, {
            strichwörter: "Tschick",
            url: "Tschick.html"
        }, {
            strichwörter: "William Afton",
            url: "William Afton.html"
        }, {
            strichwörter: "fiktive biografie",
            url: "fiktive biografie.html"
        }, ]
        
    for (let i = 0; i < seitenDaten.length; i = i + 1) {
        if (seitenDaten[i].strichwörter.includes(query)) {
            window.location.href = seitenDaten[i].url;
        }
    }
}