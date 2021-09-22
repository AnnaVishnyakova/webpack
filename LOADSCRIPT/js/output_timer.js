// import {getTimer} from "./getTimer.js";

import {printOutput} from "./output.js";

// export const printTimer =(seconds) =>{
// resultTimer.innerHTML= seconds
// } 
export let time;
export const printTimer =(seconds)=>{
   
    time = setInterval(function() {

        seconds--;
    if (seconds <0){
        clearInterval(time)
        printOutput (`
         Таймер остановлен
       
    `)
        soundFinish();
    }else{
        printOutput (`
         Осталось до конца: ${seconds}
       
    `)
    }

   

   
}, 1000);

// stop.addEventListener('click', function() {
// 	clearInterval(time);
// });


}

function soundFinish() {
  var audio = new Audio(); 
  audio.src = './js/click.mp3'; 
  audio.autoplay = true; 
}

function stopTimer(){

}







// export const printTimer =(seconds)=>{
    
// }



