async function init() {
    let bundesland = await fetch('./bundesland.json');
    currentBundesland = await bundesland.json();
    showBundesländer()
    showFirstLetter();
}

function showBundesländer() {
    document.getElementById('content').innerHTML = '';
    for (let i = 0; i < 16; i++) {
        document.getElementById('content').innerHTML += `
        <div id="box${i}" class="box">
            <a href="${currentBundesland[i]['url']}" target="_blank" class="link">
                <div>${currentBundesland[i]['name']}</div>
                <div class="pop">${currentBundesland[i]['population'].toFixed(1).replace('.', ',')} Millionen</div>
            </a>
        </div>
        `;
    }
}

let letterBox = [];

function showFirstLetter() {
    for (let i = 0; i < 16; i++) {
        let firstLetter = currentBundesland[i]['name'][0]
        if (!letterBox.includes(firstLetter)) {
            letterBox.push(firstLetter);
        }
    }
    for (let j = 0; j < letterBox.length; j++) {
        document.getElementById('letter').innerHTML += `
        <div onclick="showLänder(${j})" class="letter">${letterBox[j]}</div>
        `;
    }
    document.getElementById('letter').innerHTML += `
    <div onclick="showBundesländer()" class="letter">TOTAL</div>`;
}

function showLänder(j) {
    document.getElementById('content').innerHTML = '';
    for (let i = 0; i < 16; i++) {
        if (currentBundesland[i]['name'].indexOf(letterBox[j]) == 0) {
            document.getElementById('content').innerHTML += `
            <div id="box${i}" class="box">
                <a href="${currentBundesland[i]['url']}" target="_blank" class="link">
                    <div>${currentBundesland[i]['name']}</div>
                    <div class="pop">${currentBundesland[i]['population'].toFixed(1).replace('.', ',')} Millionen</div>
                </a>
            </div>
            `;
        }
    }
}