import { MorsetoEng } from "./nlp.js";
import { EngtoMorse } from "./nlp.js";

const morseinput = document.getElementById("Morse_input");
const enginput = document.getElementById("English_input");
const morseclear = document.getElementById("morseclear");
const engclear = document.getElementById("engclear");

//Keycode: space 32 dot 190/110 dash 189/109
morseinput.addEventListener('input', (Event) => {
    if(Event.keyCode == 32 || 190 || 110 || 189 || 109){
        enginput.value = MorsetoEng(morseinput.value);
    }else {
        Event.preventDefault();
        alert("Invalid input! Please input '.' '-' ' ' only");
    }
});

enginput.addEventListener('input', (Event) => {
    morseinput.value = EngtoMorse(enginput.value);
});

morseclear.addEventListener('click', (Event)=>{
    morseinput.value = "";
});

engclear.addEventListener('click', (Event)=>{
    enginput.value = "";
});