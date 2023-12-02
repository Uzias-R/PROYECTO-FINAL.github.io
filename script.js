let calculadora = document.getElementById("peso");
const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById ( "error" );
const C1 = document.getElementById ( "calculo 1" );
const C2 = document.getElementById ("calculo 2");
const C3 = document.getElementById ( "calculo 3" );
const C4 = document.getElementById ( "calculo 4" );
const C5 = document.getElementById ( "calculo 5" );
const C6 = document.getElementById ( "calculo 6" );
calcular.addEventListener("click", () => {
    const DATO = document.getElementById("volumen").value;
    if( 0 > DATO ){
        ERROR.style.display = "none";
    }
    else {
        let respuesta = goteo(DATO)
        C1.innerHTML = "4hs=" + (respuesta*(1/4)) + " goteo/min"
        C2.innerHTML = "8hs=" + (respuesta*(1/8)) + " goteo/min"
        C3.innerHTML = "12hs=" + (respuesta*(1/12)) + " goteo/min"
        C4.innerHTML = "16hs=" + (respuesta*(1/16)) + " goteo/min"
        C5.innerHTML = "20hs=" + (respuesta*(1/20)) + " goteo/min"
        C6.innerHTML = "24hs=" + (respuesta*(1/24)) + " goteo/min"
    }
})
function goteo(DATO){
    let resultado = DATO/(3)
    return resultado 
}
let gotas = 500 
if (gotas >= 500) {
    console.log(CalcularFlujoGotas(5))
}
function CalcularFlujoGotas(peso) {
   let resultado = ((gotas * 60) / 60)
   return resultado
}
console.log (resultado)

console.log (macrogotas(20))
function macrogotas (gotas) {
    let resultado = ((gotas * 20) * 3)
    return resultado
}
