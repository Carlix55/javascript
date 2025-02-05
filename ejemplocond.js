/*    
    // 1.Escribe un programa que pida al usuario un número y 
    // determine si es par o impar.

        const numero = parseInt(prompt("Ingresa un número:")); 
        if (numero % 2 === 0) { // Al dividir el número con dos puedes saber 
                                // si es impar o par
            console.log("El número es par.");
        } else {
            console.log("El número es impar.");
        }
*/
/*
    // 2.Crea un programa que pida al usuario dos números e 
    // imprima cuál de ellos es mayor o si son iguales.

    const num1 = parseInt(prompt("Ingresa el primer número:")); //Creas una constante para que el usuario generé un valor
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    
    if (num1 > num2) { //Las constantes se comparan
        console.log(`${num1} es mayor que ${num2}`); //Te sale un resultado a favor de la 1 const
    } else if (num1 < num2) {3
        console.log(`${num2} es mayor que ${num1}`); //Te sale un resultado a favor de la 2 const
    } else {console.log("Ambos números son iguales."); //Te sale un resultado igual a las dos const
    }
*/
    

/*
    // 3.Escribe un script en html que incluya una variable con una edad y 
    // determine si es mayor de edad (18 años o más) o menor.

        const edad = parseInt(prompt("Ingresa tu edad:"));
            if(edad >= 18){ // Si tu edad es mayor o igual a 18
            console.log("Mayor edad"); // En la consola te marca Mayor de edad
        }else{ // Si tu edad no es mayor o igual a 18
            console.log("Menor de edad"); // En la consola te marca Menor de edad
        }
*/

/*
    // 4. Crea un programa que pregunte al usuario su calificación (0-100) y 
    // determine si ha aprobado (mayor o igual a 50) o suspenso.

        const calificacion = parseInt(prompt("Ingresa tu calificación:")); //Creas una constante para que el usuario generé un valor

        if (calificacion >= 50) { // Si la calificación es mayor o igual a 50 esta aprobado
            console.log("¡Aprobaste!");
        } else {console.log("Suspendiste."); // Si no es asi está suspendo
        }  
*/


/*
    // 5. Solicita una calificación numérica (0-100) 
    // y devuelve la calificación en letra

        const calificacion = parseInt(prompt("Ingresa tu calificación:"));

        if (calificacion >= 90) {
            console.log("Tu calificación es A.");
        } else if (calificacion >= 80) {
            console.log("Tu calificación es B.");
        } else if (calificacion >= 70) {
            console.log("Tu calificación es C.");
        } else if (calificacion >= 50) {
            console.log("Tu calificación es D.");
        } else {
            console.log("Tu calificación es F.");
        }
*/            
    
/*
    // 5.1. Crea un script en html que solicite un número y muestre si es 
    // positivo, negativo o cero.

        let numero = 0; // La variable lo defines como un número
            if(numero >= 1){ // Si el número es mayor o igual a 1
            console.log("positivo"); // En la consola te marca positivo
        }else if(numero <= -1){
            console.log("negativo"); // Si el número es menor o igual a 1
        }else{
            console.log("cero"); // Si no se cumple ninguna de las condiciones anteriores
                                // te marca cero
        }
*/   
    
/*
    // 6. Pide la temperatura actual en grados y di si hace frío 
    // (menos de 20 grados) o calor (20 grados o más).

        const grados = parseInt(prompt("Por favor, ingrese la temperatura ambiente:"));
        if(grados >= 20){
            console.log("Calor");
         }else{
            console.log("Frio");
        }
*/
/*
    // 7. Escribe un programa que pida un número 
    // al usuario y determine si es múltiplo de 7.

        const numero = parseInt(prompt("Por favor, ingrese un número"));
        if(numero % 7 == 0){ // Al dividir el número con 7 puedes saber 
                            // si es múltiplo de 7 o no es múltiplo de 7
            console.log("Múltiplo de 7");
        }
        else{
            console.log("No es Múltiplo de 7");
        }
*/

/*
    // 8. Solicita un número entre 0 y 23 que represente la hora del día e 
    // indica si es de mañana (5 a 11), tarde (12 a 17) o noche (18 a 4).
    
        const hora = parseInt(prompt("Por favor, ingrese un hora entre 0 y 23"));
        if(hora >= 5 & hora <= 11){
            console.log("Horario de Mañana");
        }
        else if(hora >= 12 & hora <= 17){
            console.log("Horario de Tarde")
        }
        else{
            console.log("Horario de Noche")
        }
*/
    // 9. Crea un programa que solicite el precio de un producto y, si el precio es 
    // mayor a 100, calcule el IVA (21%) y el precio final.
    
        const precio = parseInt(prompt("Por favor, ingrese el precio de un producto"));
        
        if(precio >= 100){
            let iva = precio * 0.21
            let pf = precio + iva 

            console.log("Precio", precio)
            console.log("Precio con IVA", pf)
        }
        else{
            console.log("Precio sin IVA")
        }