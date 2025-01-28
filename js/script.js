"use strict";

function beregnFragt(){
    //Her hentes værdierne hhv. af vægten og destination og gemmes i to variabler af typen const:
    const vaegt = parseInt(document.getElementById("vaegt").value); 
    //man skriver value for at få en værdi ud. parseInt konverterer teksten til tal
    const destination = document.querySelector("input[name='destination']:checked").value;
    //querySelector søger på det jeg angiver i parentesen
    //man må ikke brugr "" to gange inde i samme sætning - ellers blander den koderne sammen
    //Her erklæres en varibale af typen let som kommer til at indeholder fragtprisen (da den er omskiftelig):
    let pris;

    if (destination === "PakkeShop"){
        if (vaegt > 0 && vaegt <= 1) {//vægten skal være større end nul eller mindre end 1
            pris = 46;
        } else if(vaegt > 1 && vaegt <= 5){//hvis prisen er større end 1 og mindre end 5
            pris = 56;
        } else if(vaegt > 5 && vaegt <= 10){
            pris = 70;
        } else if (vaegt > 10 && vaegt <= 15){
            pris=95;
        } else if (vaegt > 15 && vaegt <= 20){
            pris=110;
        }
        else {
            pris = "Ukendt pris";
        }
        } else if (destination === "Erhverv/Privatadresse"){
            if (vaegt > 0 && vaegt <= 1) {//vægten skal være større end nul eller mindre end 1
                pris = 62;
        } else if(vaegt > 1 && vaegt <= 5){//hvis prisen er større end 1 og mindre end 5
            pris = 72;
        } else if(vaegt > 5 && vaegt <= 10){
            pris = 90;
        } else if (vaegt > 10 && vaegt <= 15){
            pris= 110;
        } else if (vaegt > 15 && vaegt <= 20){
            pris= 125;
        }
        else {
            pris = "Ukendt pris";
        }
    }

    const resultDivElem = document.getElementById("result");
    resultDivElem.textContent = `Fragtprisen er: ${pris},-`;

    resultDivElem.style.display = "block";
}

//et "="-tegn giver en variable en værdi
//