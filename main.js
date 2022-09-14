class Producto {
    constructor(tipo, precio, stock, id) {
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
}

//Inicializo arrays para los distintos productos
const frutoSeco = [];
const semilla = [];
const harina = [];
const cereal = [];

//Cargo el stock de Productos segun su tipo
//FRUTOS SECOS
frutoSeco.push(new Producto("Almendra", 4, 1000, 1));

//SEMILLAS
semilla.push(new Producto("Girasol pelado", 0.75, 1000, 5));


//HARINAS

harina.push(new Producto("Integral", 0.75, 10000, 9)); 

//CEREALES
cereal.push(new Producto("Avena Instantanea", 1.45, 10000, 11)); 





let productoElegido = parseInt(prompt(`Ingresá el número del producto que querés comprar:
1) Almendra 
5) Girasol Pelado
9) Harina de trigo Integral
11) Avena instantanea

`));

let cantidad = parseInt(prompt("Ingresá la cantidad en gramos que querés comprar"));


//Salida de consola con el precio final segun el ID elegido

switch(productoElegido) {
    case "1": 
    //Usamos parseInt para redondear y simplificar la transacción evitando el cambio en centavos.
        console.log("El importe a pagar es de " + parseInt(frutoSeco.precio * cantidad) + "pesos argentinos");
        break;
    case "5":
        console.log(`El importe a pagar es de ${parseInt (semilla.precio * cantidad)} pesos argentinos`);
        break;
    case "9":
        console.log(`El importe a pagar es de ${parseInt(harina.precio * cantidad)} pesos argentinos`);
        break;
    case "4":
        console.log(`El importe a pagar es de ${parseInt(cereal.precio * cantidad)} pesos argentinos`);
        break;
    default: 
        console.log("Volvé a intentarlo ingresando un número válido");
        break;
}


