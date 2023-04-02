const input = document.querySelector('.input'),
      btnCalc = document.querySelector('.btn_calc'),
      squereResult = document.querySelector('.squere'),
      circumferenceResult = document.querySelector('.circumference');

btnCalc.addEventListener('click', getResult)

function getResult(){
    if(parseInt(input.value) > 0){
        const squere = Math.PI * Math.pow((Number(input.value)),2)
        const circumference = (2 * Math.PI) * Number(input.value) 
        squereResult.textContent = squere.toFixed(5)
        circumferenceResult.textContent = circumference.toFixed(5)
        return true
    }
    return false
}