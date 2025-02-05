/*
    //Ej6

        class Persona {
            constructor(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
            }
      
            presentarse() {
                return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
            }
        }
            const persona1 = new Persona("Juan", 30);
            console.log(persona1.presentarse());
*/

/*
    //Ej7

        class Coche {
            constructor(modelo, marca, año) {
                this.modelo = modelo;
                this.marca = marca;
                this.año = año;
            }
        }
      
      // Crear una instancia de la clase Coche
        const miCoche = new Coche("Civic", "Honda", 2022);
      
      // Imprimir las propiedades del coche en la consola
            console.log(`Modelo: ${miCoche.modelo}`);
            console.log(`Marca: ${miCoche.marca}`);
            console.log(`Año: ${miCoche.año}`);
*/

/*
    //Ej8

        class Contador {
            constructor() {
            this.cuenta = 0; // Inicializar la propiedad cuenta en 0
            }
      
            incrementar() {
            this.cuenta++;
            }
      
            decrementar() {
            this.cuenta--;
            }
      
            mostrarCuenta() {
            return `El valor actual de la cuenta es: ${this.cuenta}`;
            }
        }
      
      // Crear una instancia de la clase Contador
        const contador = new Contador();
      
      // Usar los métodos de la clase
        contador.incrementar();
        contador.incrementar();
            console.log(contador.mostrarCuenta()); // El valor actual de la cuenta es: 2
      
        contador.decrementar();
            console.log(contador.mostrarCuenta()); // El valor actual de la cuenta es: 1
*/

/*
    //Ej9

        // Definición de la clase Animal
        class Animal {
            hablar() {
                return "El animal hace un sonido.";
            }
         }
        // Definición de la clase Perro que hereda de Animal
        class Perro extends Animal {
            hablar() {
                return "Guau, guau";
            }
        }
        // Crear una instancia de la clase Perro
        const miPerro = new Perro();
        // Usar el método hablar
            console.log(miPerro.hablar()); // Guau, guau
*/

/*
    //Ej10

        class Rectangulo {
            constructor(ancho, alto) {
                this.ancho = ancho;
                this.alto = alto;
            }
      
        // Método get para calcular el área
             get area() {
                return this.ancho * this.alto;
            }
      
        // Método get para calcular el perímetro
            get perimetro() {
                return 2 * (this.ancho + this.alto);
            }
        }
      
      // Crear una instancia de la clase Rectangulo
        const miRectangulo = new Rectangulo(10, 5);
      
      // Imprimir los valores del área y el perímetro
            console.log(`Ancho: ${miRectangulo.ancho}`);
            console.log(`Alto: ${miRectangulo.alto}`);
            console.log(`Área: ${miRectangulo.area}`);
            console.log(`Perímetro: ${miRectangulo.perimetro}`);
*/

/*
    //Ej11

        class Banco {
            #saldo; // Declarar la propiedad privada
      
            constructor(saldoInicial = 0) {
                this.#saldo = saldoInicial; // Inicializar el saldo
            }
      
        // Método para depositar dinero
            depositar(cantidad) {
            if (cantidad > 0) {
            this.#saldo += cantidad;
                console.log(`Has depositado ${cantidad}.`);
            } else {
                console.log("La cantidad a depositar debe ser mayor a 0.");
            }
            }
      
        // Método para retirar dinero
            retirar(cantidad) {
                if (cantidad > 0 && cantidad <= this.#saldo) {
                this.#saldo -= cantidad;
                    console.log(`Has retirado ${cantidad}.`);
                } else if (cantidad > this.#saldo) {
                    console.log("Fondos insuficientes.");
                } else {
                    console.log("La cantidad a retirar debe ser mayor a 0.");
                }
        }
      
        // Método para consultar el saldo
            consultarSaldo() {
                return `Tu saldo actual es: ${this.#saldo}`;
            }
        }
      
      // Crear una instancia de la clase Banco
            const miBanco = new Banco(1000);
      
      // Usar los métodos públicos
            miBanco.depositar(500);
                console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1500
      
            miBanco.retirar(300);
               console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1200
      
            miBanco.retirar(2000); // Fondos insuficientes.
                console.log(miBanco.consultarSaldo()); // Tu saldo actual es: 1200
*/

/*
    //Ej12

            // Clase base Instrumento
            class Instrumento {
                tocar() {
                return "Estoy tocando un instrumento.";
                }
            }
            
            // Clase Guitarra que hereda de Instrumento
            class Guitarra extends Instrumento {
                tocar() {
                return "Estoy tocando la guitarra: Strum, strum!";
                }
            }
            
            // Clase Batería que hereda de Instrumento
            class Bateria extends Instrumento {
                tocar() {
                return "Estoy tocando la batería: Boom, boom, clap!";
                }
            }
            
            // Crear instancias de cada clase
            const miGuitarra = new Guitarra();
            const miBateria = new Bateria();
            
            // Usar el método tocar en cada instancia
            console.log(miGuitarra.tocar()); // Estoy tocando la guitarra: Strum, strum!
            console.log(miBateria.tocar());  // Estoy tocando la batería: Boom, boom, clap!
*/

/*
    //Ej13

        class Persona {
            constructor(nombre,edad){
                this.nombre=nombre;
                this.edad=edad;
            }
            presentarse(){
                return`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
            }
        }
        const persona1 = new Persona("Carlos",24);
            console.log(persona1.presentarse());
*/

/*
    //Ej14

        class Producto {
            constructor(nombre,precio){
                this.nombre=nombre;
                this.precio=precio;
            }
            detalles(){
                return `El producto ${this.nombre} cuesta ${this.precio}.`
            }
        }
        const producto1= new Producto ("Azucar","1€");
            console.log(producto1.detalles());
*/

/*
    //Ej15

        class Animal{
            hacerSonido (){
                return "El animal hace un sonido";
            }
        }
        class Gato extends Animal{
            hacerSonido(){
                return "El gato dice: Miau";
            }
        }
        const migato = new Gato();
        console.log(migato.hacerSonido());
*/

/*
    //Ej16

        class Coche{
            constructor(marca,modelo,año){
                this.marca=marca;
                this.modelo=modelo;
                this.año=año;
            }
            detalles(){
                return `Este coche es un ${this.marca} ${this.modelo} del año ${this.año}`
            }
        }
        const micoche = new Coche("Toyota","Yaris", 99);
            console.log(micoche.detalles());
*/

/*
    //Ej17

        class Libro{
            constructor(titulo,autor,paginas){
                this.titulo=titulo;
                this.autor=autor;
                this.paginas=paginas;
            }
            descripcion(){
                return  `El libro ${this.titulo} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`
            }
        }
        const milibro= new Libro("Tao te king","Lao Tse",200);
            console.log(milibro.descripcion());
*/

/*
    //Ej18

        class Usuario {
            constructor(nombre, correo){
                this.nombre=nombre;
                this.correo=correo;
            }
            datos(){
                return `Usuario; ${this.nombre}, Correo: ${this.correo}`;
            }
        }
        const miusuario= new Usuario("Carlos","carlos@gmail.com");
            console.log(miusuario.datos());
*/

//Ej19

class Vehiculo {
    mover() {
        return `El vehículo se está moviendo.`;
    }
}
class Bicicleta extends Vehiculo {
    mover() {
        return `La bicicleta está avanzando con pedales`
    }
}
const mibicleta = new Bicicleta;
console.log(mibicleta.mover());