const pole1 = document.getElementById("1")
const pola = document.getElementsByClassName("kwadrat")

for (let poleGry of pola) {
    poleGry.addEventListener('click', function(event) { 
        console.log(event)
        const kliknietePole = event.target
        const polePrzedstawiajaceJakiZnakJestAktualny = document.getElementById("aktualnyGracz")
        const aktualnyZnak = polePrzedstawiajaceJakiZnakJestAktualny.innerText
        kliknietePole.innerText = aktualnyZnak
        zmianaZnaku()
     });
}

function zmianaZnaku() {
    const polePrzedstawiajaceJakiZnakJestAktualny = document.getElementById("aktualnyGracz")
    if (polePrzedstawiajaceJakiZnakJestAktualny.innerText == "O"){
        polePrzedstawiajaceJakiZnakJestAktualny.innerText = "X"
    }else{
        polePrzedstawiajaceJakiZnakJestAktualny.innerText = "O"
    }
}





