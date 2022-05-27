AOS.init();

    
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; 
    if(ubicacionPrincipal >= desplazamientoActual){ 
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; 

})

function validacion()
        {
            valor = document.getElementById("nombre").value;

            if( valor == null || valor.lenght <= 3)
            {
                document.getElementById('mensaje').innerHTML = "Tenés que completar el nombre";
                elemento = document.getElementById('nombre');
                elemento.focus();

                return false;
            }

            valor = document.getElementById("email").value;
            
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
            {
                document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;
                
                elemento = document.getElementById('email');
                elemento.value = '';
                elemento.focus();

                return false;
            }
            return true;
        }