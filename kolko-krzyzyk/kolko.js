const pole1 = document.getElementById("1")
const pola = document.getElementsByClassName("kwadrat")

for (let poleGry of pola) {
    poleGry.addEventListener('click', function(event) { 
        console.log(event)
        const kliknietePole = event.target
        kliknietePole.innerText = "O"
    
     });
}






