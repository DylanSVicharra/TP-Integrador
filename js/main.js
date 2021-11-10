function validacion_cantidad(cant){

    if (isNaN(cant)){
        alert("La cantidad ingresada no es una correcta");
        return false;
    }else{
        if (cant < 1 || cant > 99){
            alert("La cantidad ingresada no esta en el rango permitido");
            return false;
        }else{
            return true;
        }
    }
}

function resumen(){
    let cantidad = parseInt(document.getElementById("cantidad").value, 10);
    let categoria = document.getElementById("categoria");
    let total = document.getElementById("total");
    let suma;
    
    if(validacion_cantidad(cantidad)==true){
        if(categoria.value == 1){
            suma = (cantidad*200)*0.2;
            total.innerHTML = "Total a Pagar: $" + suma;
        }
        else if(categoria.value == 2){
            suma = (cantidad*200)*0.5;
            total.innerHTML = "Total a Pagar: $" + suma;
        }
        else if(categoria.value == 3){
            suma = (cantidad*200)*0.85;
            total.innerHTML = "Total a Pagar: $" + suma;
        }
        else if(categoria.value == 0){
            suma = (cantidad*200)*1;
            total.innerHTML = "Total a Pagar: $" + suma;
        }
    }
};

function limpiar(){
    let total = document.getElementById("total");

    total.innerHTML = "Total a Pagar: $";
};