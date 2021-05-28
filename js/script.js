//$(document).ready(function(){

    let button= document.getElementById("icono");
    let enlaces = document.getElementById("enlaces");
    let buttonInicio= document.getElementById("btnInicio");
    let buttonHacerlo= document.getElementById("btnHacer");
    let buttonContacto= document.getElementById("btnContacto");
    let contador=0;
    
    button.addEventListener("click",function(e){
        e.preventDefault();
        if(contador==0){
            enlaces.className=("enlaces dos")
            contador=1;
        }else{
            enlaces.classList.remove("dos")
            enlaces.className=("enlaces uno")
            contador=0;
        }
    })

    buttonInicio.addEventListener("click",function(){
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0;
    })

    buttonHacerlo.addEventListener("click",function(){
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0;
    })

    buttonContacto.addEventListener("click",function(){
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0;
    })
//})