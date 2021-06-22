import { corpus } from "./Corpus.js";
//Hello. World! => .... . .-.. .-.. --- .-.-.-   .-- --- .-. .-.. -.. -.-.--
 function CapitalizeEng(engArr){
     const result = [];
     result.push(engArr[0].charAt(0).toUpperCase() + engArr[0].substring(1));
    
     if (engArr.length > 1){
        for (let i=1; i<engArr.length; i++){
            if (engArr[i-1].endsWith("." || "!")){
                result.push(engArr[i].charAt(0).toUpperCase() + engArr[i].substring(1));
            }else {
                result.push(engArr[i]);
            }
        }
    }
    return result;
 }

export const MorsetoEng = (morse) => {
    const engArr = morse
    .split("    ")
    .map(
        (word) => word
        .split(" ")
        .map((char) => corpus[char]).join(""));
    return CapitalizeEng(engArr).join(" ");
}

//const test = MorsetoEng(".... . .-.. .-.. --- .-.-.-    .-- --- .-. .-.. -.. -.-.--");
//console.log(test);

export const EngtoMorse = (eng) => {
    const morse = eng.toLowerCase().split(" ")
    .map((word) => word.split("").map((char) => {
        return Object.keys(corpus).find(key => corpus[key] === char);
    }).join(" ")
    ).join("    ");
    return morse;
}

//const test = EngtoMorse("Hello. World!");
//console.log(test);