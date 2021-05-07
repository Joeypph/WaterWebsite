let button= document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador=0;

button.addEventListener("click",function(){
    console.log("hi");
    if(contador==0){
        enlaces.className=("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0;

    }
})