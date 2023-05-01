//definisco le variabili
let userEta, userChilometri, prezzoDelBiglietto, prezzoFinale;

//definisco le costanti
const tariffaTicket = 0.21;

genera = document.getElementById("button");
genera.addEventListener("click",
function() {
    const ticket = document.getElementById("biglietto");
   ticket.style.display = "block";
//chiedere il nome del passegero
const nomeCognome = document.querySelector("#name").value;
console.log(nomeCognome);


//chiedere al passegero il numero di chilometri
userChilometri = document.querySelector("#userKm").value;
console.log(userChilometri);


//chiedere al passegero l'età
userEta = document.querySelector("#userAge").value;
console.log(userEta);

//calcolare il prezzo del biglietto
prezzoDelBiglietto = userChilometri * tariffaTicket;
console.log(prezzoDelBiglietto);


if(userEta === "minorenne"){// SE il passsegero è più piccolo di 18 anni ha uno sconto del 20%
    prezzoFinale = prezzoDelBiglietto - (prezzoDelBiglietto * 20 / 100 );
    console.log(prezzoFinale);
    document.getElementById("offerta").innerHTML=  'young sale';
}else if(userEta === "over 65"){// ALTRIMENTI SE il passegero è più grande di 65 anni ha uno sconto del 40%
    prezzoFinale = prezzoDelBiglietto - (prezzoDelBiglietto * 40 / 100 );
    document.getElementById("offerta").innerHTML=  'sale over 65';
    console.log(prezzoFinale);

}else{//ALTRIMENTI il passeggero ha un età compresa tra 18 e 65 anni
    prezzoFinale = prezzoDelBiglietto;
    document.getElementById("offerta").innerHTML=  'biglietto standard';
}
    
prezzoFinale = Math.round((prezzoFinale + Number.EPSILON) * 100) / 100;
console.log(prezzoFinale);



//OUTPUT
document.getElementById("nome").innerHTML=  nomeCognome;

document.getElementById("carrozza").innerHTML=  Math.round(Math.random() * 15 + 1);
document.getElementById("codice cp").innerHTML=  Math.round(Math.random() * 3000 + 1);
document.getElementById("prezzo").innerHTML=  prezzoFinale + "€"; 
}
);

annulla = document.getElementById("annulla");
annulla.addEventListener("click",
function() {
    const ticket = document.getElementById("biglietto");
   ticket.style.display = "none";
}
);

    
