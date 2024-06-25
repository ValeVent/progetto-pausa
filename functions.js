// CACHE DEL DOM
const button = document.querySelector("button");
const p = document.querySelectorAll("p");

//GESTIONE DEGLI EVENTI

button.addEventListener("click", pausa);

function pausa () {
    if (button.innerHTML=="Termina la pausa :(") {
        p[0].textContent=""
        p[1].textContent=""
        button.innerHTML="Inizia la pausa!"
    } else {
        adesso = new Date();
        adesso = new Date (adesso.getTime()+60000);
        let fine = new Date(adesso.getTime()+900000);
        p[0].textContent="Inizio pausa = " + adesso.toLocaleTimeString("it-IT").slice (0, -3);
        p[1].textContent="Fine pausa = " + fine.toLocaleTimeString("it-IT").slice (0, -3);
        button.innerHTML="Termina la pausa :("
    }
};

