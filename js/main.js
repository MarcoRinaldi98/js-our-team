/* 
JAVASCRIPT
*/

const containerDom = document.getElementById('container');
//array di ogetti
const dipendenti = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
];
console.log(dipendenti);

//ciclo per stampare nell'html le informazioni dei dipendenti
for (let i = 0; i < dipendenti.length; i++) {
    const dipendenteCorrente = dipendenti[i];

    for (let key in dipendenteCorrente) {
        console.log(key + ': ' + dipendenteCorrente[key]);
        
    }
    containerDom.innerHTML += `
        <div class="card m-3" style="width: 18rem;">
            <img src="img/${dipendenteCorrente['foto']}" class="card-img-top" alt="immagine di ${dipendenteCorrente['nome']}">
            <div class="card-body text-center">
                <h5 class="card-title">${dipendenteCorrente['nome']}</h5>
                <p class="card-text">${dipendenteCorrente['ruolo']}</p>
            </div>
        </div>`;
}




