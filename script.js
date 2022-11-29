let burgers=[
    {id: 1, nombre: "Kansas Burger", precio: 999, imgUrl: "./fotos/hamburguesa-1.png"}, 
    {id: 2, nombre: "California Burger", precio: 850, imgUrl: "./fotos/hamburguesa-2.png"}, 
    {id: 3, nombre: "Zion Burger", precio: 720, imgUrl: "./fotos/hamburguesa-3.png"},
    {id: 4, nombre: "What Cheer Burgerr", precio: 1200, imgUrl: "./fotos/hamburguesa-4.png"},
    {id: 5, nombre: "Keota Burger", precio: 1050, imgUrl: "./fotos/hamburguesa-5.png"}
]

let contenedorProducto = document.getElementById("carta")
let carrito = document.getElementById("carrito")

for (const producto of burgers){
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "carta__tarjeta"
    tarjetaProducto.innerHTML = `
    <h3 class="carta__titulo">${producto.nombre}</h3>
    <h4>$${producto.precio}</h4>
    <img src=${producto.imgUrl} class="carta__imagen">
    <button class="botonProducto">Agregar al carrito</button>
    `
    contenedorProducto.append(tarjetaProducto)

    let botones = document.getElementsByClassName("botonProducto")
    for (const boton of botones){
        boton.addEventListener("click", funcionBoton)
    }
}

function funcionBoton(e){
    console.dir(e.target.id)
    let productoBuscado = burgers.find(producto => producto.id == e.target.id)
    carrito.innerHTML += `
    <div class="carrito__item">
        <h4>${productoBuscado.nombre}</h4>
        <h4>${productoBuscado.precio}</h4>
    </div>
    `
}