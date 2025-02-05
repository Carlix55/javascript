/*
    //Ej1
        function convertir(km){
            return km*0.621371;
        }
        console.log(convertir(160),"Millas");
*/

/*
    //Ej2

        let frase = "Esta es una frase de ejemplo";
        console.log(frase.split(" ").length);
*/

/*
    //Ej3
        
        function numeromayor(n1,n2,n3){
        if(n1>n2 && n1>n3){
            return(n1);
        }
        else if(n2>n1 && n2>n3){
            return(n2);
        }
        else{
            return(n3);
        }
        }
        console.log(numeromayor(9,5,6));
*/

/*
    //Ej4

       const numeros=[1,2,3,4,5,6,7,8,9,10];
       let suma=0;
       for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        }
        console.log(suma)
*/

/*
    //Ej5

        for (let i = 1; i<21 ; i++){
            if (i%2!==0){
            console.log(i);
            }
        }
*/

/*
    //Ej6

        const numeros = [50, 20, 5, 40, 30];
        const menor = numeros.slice().sort((a, b) => a - b);
            console.log("Array ordenado:", menor[0]);
*/

/*
    //Ej7

        let texto= "Carl"
        if (texto.length>5){
            console.log("True")
        }
        else{
            console.log("False")
        }
*/

/*
    //Ej8
         
        function contar(array, numero) {
            let contador = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === numero) {
                    contador++;
                }
            }
            return contador;
        }
        const array = [1, 2, 3, 4, 2, 5, 2, 6];
        const numeroBuscado = 2;
      
        const cantidad = contar(array, numeroBuscado);
            console.log(`El número ${numeroBuscado} aparece ${cantidad} veces en el array.`);
*/

/*
    //Ej9

        function eliminar(array){
            return array.filter(numero=> numero >= 0)
        }
        const arrayori = [1, -2, 3, -4, 2, -5, 2, -6];
        const arrayelim = eliminar(arrayori);
        console.log("Array original", arrayori)   
        console.log("Array eliminar", arrayelim)  
*/

/*
    //Ej10

        function divisible (numero){
            if(numero%3===0 && numero%5===0){
                return true;
            }
            else{
                return false;
            }
        }
        const numero = 15
        if(divisible(numero)){
            console.log(`${numero} es divisble entre 3 y 5`);
        }
        else{
            console.log(`${numero} no es divisible entre 3 y 5`);
        }
*/

/*
    //Ej11

        let valor= 5
        const numeros = [10, 20, 30, 40, 50];    
        const map = numeros.map(elemento=> elemento*valor)
       
        
            console.log(`La multiplicación de ${valor} sobre los numeros ${numeros} da ${map}`);
*/

    //Ej12

       const multi = Math.floor(Math.random() * 100);
       console.log("La web genera este número al azar", multi);






        
            
            
    




