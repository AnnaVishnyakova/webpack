 import {printOutput} from "./output.js";
import {printTimer} from "./output_timer.js";


const timerDate= document.getElementById("timerDate");

timerDate.onsubmit = (event)=>{
    event.preventDefault();
    
    const {timeDate} =timerDate.elements;
    

    if (!timeDate.value || isNaN(timeDate.value)){
        printOutput ("Заполните все поля")

        return ;
    }

    printTimer(timeDate.value)
    
    
}
