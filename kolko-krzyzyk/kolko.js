const pole1 = document.getElementById("1")
const pola = document.getElementsByClassName("kwadrat")
let czyRozstrzygniete = false
let licznikRuchow = 1

for (let poleGry of pola) {
    poleGry.addEventListener('click', function(event) { 
        console.log(event)
        const kliknietePole = event.target
        if (kliknietePole.innerText == ""){
            const polePrzedstawiajaceJakiZnakJestAktualny = document.getElementById("aktualnyGracz")
            const aktualnyZnak = polePrzedstawiajaceJakiZnakJestAktualny.innerText
            kliknietePole.innerText = aktualnyZnak
            sprawdzenieWyniku(aktualnyZnak)
            zmianaZnaku()
            licznikRuchow = licznikRuchow + 1
        }else{
            alert("To pole jest już zajęte!")
        }
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

function sprawdzenieWyniku(aktualnyZnak) {
    const pola = document.getElementsByClassName("kwadrat")
    if (pola[0].innerText == aktualnyZnak && pola[1].innerText == aktualnyZnak && pola[2].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[0].innerText == aktualnyZnak && pola[3].innerText == aktualnyZnak && pola[6].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[3].innerText == aktualnyZnak && pola[4].innerText == aktualnyZnak && pola[5].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[6].innerText == aktualnyZnak && pola[7].innerText == aktualnyZnak && pola[8].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[1].innerText == aktualnyZnak && pola[4].innerText == aktualnyZnak && pola[7].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[2].innerText == aktualnyZnak && pola[5].innerText == aktualnyZnak && pola[8].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[0].innerText == aktualnyZnak && pola[4].innerText == aktualnyZnak && pola[8].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (pola[6].innerText == aktualnyZnak && pola[4].innerText == aktualnyZnak && pola[2].innerText == aktualnyZnak){
        alert("Gratulacje!!! Wygrał: " + aktualnyZnak)
        czyRozstrzygniete = true
    }
    if (czyRozstrzygniete == false && licznikRuchow == 9){
        alert("Remis! Spróbuj jeszcze raz")
    }
}





