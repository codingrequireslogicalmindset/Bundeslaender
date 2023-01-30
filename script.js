async function showBundesländer() {
    for (let i = 0; i < 16; i++) {
        let bundesland = await fetch('./bundesland.json');
        currentBundesland = await bundesland.json();
        document.getElementById('content').innerHTML += `
        <div id="box${i}" class="box">
            <a href="${currentBundesland[i]['url']}" target="_blank" class="link">
                <div>Bundesland: ${currentBundesland[i]['name']}</div>
                <div>Einwohner: ${currentBundesland[i]['population'].toFixed(1).replace('.', ',')} Millionen</div>
            </a>
        </div>
        `;
    }
}

let letterBox = [];

async function showFirstLetter() {
    for (let i = 0; i < 16; i++) {
        let letter = await fetch('./bundesland.json');
        currentLetter = await letter.json();
        let firstLetter = currentLetter[i]['name'][0]
        if (!letterBox.includes(firstLetter)) {
            letterBox.push(firstLetter);
        }
    }
    for (let j = 0; j < letterBox.length; j++) {
        document.getElementById('letter').innerHTML += `
        <div onclick="showLänder(${j})" class="letter">${letterBox[j]}</div>
        `;
    }
}

async function showLänder(j) {
    document.getElementById('content').innerHTML = '';
    for (let i = 0; i < 16; i++) {
        let bundesland = await fetch('./bundesland.json');
        currentBundesland = await bundesland.json();
        if (currentBundesland[i]['name'].indexOf(letterBox[j]) == 0) {
            document.getElementById('content').innerHTML += `
            <div id="box${i}" class="box">
                <a href="${currentBundesland[i]['url']}" target="_blank" class="link">
                    <div>Bundesland: ${currentBundesland[i]['name']}</div>
                    <div>Einwohner: ${currentBundesland[i]['population'].toFixed(1).replace('.', ',')} Millionen</div>
                </a>
            </div>
            `;
        }
    }
}

async function url() {
    let URL = await fetch('./bundesland.json');
    let currentURL = await URL.json();
    for (let i = 0; i < 16; i++) {
        document.getElementById(`box${i}`).innerHTML += `
        <a href="${currentURL[i]['url']}"></a>
        `;
    }
}