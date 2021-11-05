function mensaje(){
    console.warn(":)");
    console.warn("Hola como estas");
    return "Hola soy la funcion";
}
let respuesta = (true) ? mensaje() 
                : (false) ? ":P" : ":(";
console.warn(respuesta);




if(true){
    console.log(":)");
    console.log("Hola como estas");
    console.log("Hola soy la funcion");
}else{
    if(false){
        console.log(":p");
    }else{
        console.log(":(");
    }
}








let numero2 = parseInt(prompt("Ingrese un numero", "22"));

if(numero2 >= 5 && numero2 <= 10){
    console.log(`Rango 5 - 10 : ${numero2}`);
}else if(numero2 >= 15 && numero2 <= 20){
    console.log(`Rango 15 - 20 : ${numero2}`);
}else if(numero2 >= 25 && numero2 <= 30){
    console.log(`Rango 25 - 30 : ${numero2}`);
}else{
    console.log("La condicion no se cumple :(");
}









if(false){
    console.log(":)");
}else if(false){
    console.log(";)");
}else if(false){
    console.log(";V");
}else{
    console.log(":(");
}









let numero = parseInt(prompt(`Ingrese un numero`, `2`));
if(!(numero >= 5 && numero <=10 || numero == 2)){
    console.log(`El numero esta dentro del rango 5-10 DATO ${numero}`);
}else{
    console.log(`El numero no cumple la condicion`);
}








if(true){
    console.log(`Condicion correcta :)`);
}else{
    console.log(`Condicion incorrecta :(`);
}