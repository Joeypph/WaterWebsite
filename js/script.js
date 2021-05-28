//$(document).ready(function(){

    let button= document.getElementById("icono");
    let enlaces = document.getElementById("enlaces");
    var esconder = document.getElementById("esconder");
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
    esconder.addEventListener('click', function() {
        //alert('Hello world');
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0;
    });


//})

