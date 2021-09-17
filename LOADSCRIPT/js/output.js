

const resultTag = document.getElementById("result");


export const printOutput =(text) =>{
resultTag.innerHTML= text
} 

export const printDatesDiff =({years,month,days})=>{
    printOutput (`
        Дни: ${days},
        Месяцы:${month},
        Годы:${years},
    `)
}
