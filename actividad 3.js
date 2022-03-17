//Ejercicio 1//
var num = 0;
num = prompt("ingrese un numero");
if(num %2===0) {
    alert("su numero es divisible entre 2");
    document.write("su numero es divisible entre 2 : porque usaste:  " + num + "<br>");
}else {
    alert("su numero no es divisible entre 2");
    document.write("su no es numero es divisible entre 2 : porque usaste:" + num + "<br>");
}   

//Ejercicio 2//
var num = 0;
num = prompt ("introduce un num");


if (num %2===0) {
    alert("si es un numero par");
}else{
     
     alert("no es un numero par"); 
    

//Ejercicio 3//
 var num = 0;
num = prompt ("introduce un num");
if (num = 1000) {
    document.write("ganaste un premio :" + "<br>");
}else {
   alert("Lo sentimos, sigue participando");
}
    
//Ejercicio 4//
var num1 = prompt("introduce el primer numero");
var num2 = prompt("introduce el segundo numero");
if(num1 < num2){
    alert(num1 + "es menor que" + num2 )
}else{
    alert(num2 + "es menor que" + num1 )
} 
    
//Ejercicio 5//    
var num1 = prompt("introduce el primer numero");
var num2 = prompt("introduce el segundo numero");
var num3 = prompt("introduce el tercer numero");
if(num1 > num2 && num1 > num3){
    alert("el numero mayor es " + num1);
}else if(num2 > num1 && num2 > num3){
    alert("el numero mayor es " + num2);
}else{
     alert("el numero mayor es " + num3);
}
