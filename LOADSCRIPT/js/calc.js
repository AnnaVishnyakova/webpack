import {printDatesDiff } from "./output_calc.js";
import { printOutput} from "./output.js";
import getDatesDiff from "./getDatesDiff.js";

const form = document.getElementById("calcDate")

form.onsubmit = (event)=>{
    event.preventDefault();

    const {firstDate, secondDate} = form.elements;
    // firstDate = firstDate.value,secondDate=secondDate.value;

    if (!firstDate.value || !secondDate.value){
        printOutput ("Заполните все поля")

        return ;
    }

   
const dateDiff = getDatesDiff({from: firstDate.value, to: secondDate.value}); 

printDatesDiff(dateDiff)
} 






