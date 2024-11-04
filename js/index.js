


const PRODUCTOS_ARRAY = [
    {
        id: 1,
        nombre: 'iphone 16',
        precio: 1500
    },
    {
        id: 2,
        nombre: 'samsung s24',
        precio: 1450
    },
    {
        id: 3,
        nombre: 'xiaomi redmi 13',
        precio: 850
    },
    {
        id: 4,
        nombre: 'motorola edge',
        precio: 650
    },


]


let carrito = [];




function mostrarProductos(){
    const PRODUCTOS_SECTION = document.getElementById('productos');
    PRODUCTOS_ARRAY.forEach(prod =>{
        const CARD_DIV = document.createElement('div');
        CARD_DIV.className = 'card-container'
        CARD_DIV.innerHTML = 
        `
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button onclick="añadirCarrito(${prod.id})">Comprar</button>

        `
        PRODUCTOS_SECTION.appendChild(CARD_DIV);
    })
}

mostrarProductos();