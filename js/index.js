


// let carrito = [];




// function mostrarProductos(FILTRADO_PRODUCTOS){
//     const PRODUCTOS_SECTION = document.getElementById('productos');
//     PRODUCTOS_SECTION.innerHTML = '';

//     FILTRADO_PRODUCTOS.forEach(prod =>{
//         const CARD_DIV = document.createElement('div');
//         CARD_DIV.className = 'card-container'
//         CARD_DIV.innerHTML = 
//         `
//         <h3>${prod.nombre}</h3>
//         <p>${prod.precio}</p>
//         <button onclick="añadirCarrito(${prod.id})">Comprar</button>

//         `
//         PRODUCTOS_SECTION.appendChild(CARD_DIV);
//     })
// }





//funcion de filtrado

// function filtrarProductos(eleccion){
//     let FILTRADO_PRODUCTOS;
//     if(eleccion){
//         FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY.filter(prod => prod.tamaño === eleccion)
//     }
//     else{
//         FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY
//     }
//     mostrarProductos(FILTRADO_PRODUCTOS)

// }

// mostrarProductos(PRODUCTOS_ARRAY);

// document.getElementById('todos').addEventListener('click', ()=>filtrarProductos(''));
// document.getElementById('grande').addEventListener('click', ()=>filtrarProductos('grande'));
// document.getElementById('mediano').addEventListener('click', ()=>filtrarProductos('mediano'));
// document.getElementById('pequeño').addEventListener('click', ()=>filtrarProductos('pequeño'));


let productos = [
    {
        id: 1,
        nombre: 'Flor de solapa',
        precio: 10,
    },
    {
        id: 2,
        nombre: 'Centros de Mesa',
        precio: 50,
    },
    {
        id: 3,
        nombre: 'Coronas',
        precio: 100,
    },
    {
        id: 4,
        nombre: 'Pulseras',
        precio: 20,
    },
    {
        id: 5,
        nombre: 'Ramos',
        precio: 60,
    },
    {
        id: 6,
        nombre: 'Estructuras',
        precio: 200,
    },

]




function mostrarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosDiv.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(prod => prod.id === id);

    const productoEnCarrito = CARRITO.find(prod => prod.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        CARRITO.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    mostrarCarrito();
}


function mostrarCarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = '';

    let total = 0;
    CARRITO.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio} x ${producto.cantidad}`;
        li.innerHTML += `<button onclick="eliminarDelCarrito(${index})">Eliminar producto</button>`;
        carritoList.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}


function eliminarDelCarrito(index) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    CARRITO.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    mostrarCarrito(); 
}


function eliminarTodosLosProductos() {
    localStorage.removeItem('carrito'); 
    mostrarCarrito();
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarCarrito();

    
    document.getElementById('eliminarProductos').addEventListener('click', eliminarTodosLosProductos);
});
