/*
    //1. Crea un programa que tome un array de números y 
    // calcule la suma de todos sus elementos.

        const numeros = [10, 20, 30, 40, 50];    
        let suma=0;
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
            console.log("La suma de los números es:", suma);
*/

/*
    //2. Crea un array que contenga los números del 1 al 10 e
    //  imprime cada número en la consola.

        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        
        for (let i = 0; i < numeros.length; i++) {
             console.log(numeros[i]);
        }
*/

/*
    //3. Crea un programa que tome un array de números y 
    // lo ordene de menor a mayor. 

        const numeros = [50, 20, 10, 40, 30];
        const ordenado = numeros.slice().sort((a, b) => a - b);
            console.log("Array ordenado:", ordenado);
*/

/*
    //4. Crea un array y verifica si contiene un valor dado.

        const numeros = [10, 20, 30, 40, 50];
        const buscar = 30;
        const existe = numeros.includes(buscar);
            console.log(`¿El número ${buscar} está en el array?`, existe);
*/

/*
    //5. Crea un array vacío y agrega un elemento al final.
    
        const frutas = [];
            frutas.push("manzana");
            console.log("Array después de agregar un elemento:", frutas);
*/

/*
    //6. Crea un array con los números pares del 2 al 20 
    // e imprime cada número en la consola. 

    
        const pares =[];
        for (let i = 2; i <= 20; i+=2){
            pares.push(i);
        }
        for (let i=2; i<= pares.length+10 ; i+=2){
            console.log(i);
        }
*/

    //7. Crea un array con tres nombres de colores
    //  e imprime cada uno en la consola.

        const colores=[]; 
        colores.push ("verde","amarillo","rojo");
            console.log(colores)