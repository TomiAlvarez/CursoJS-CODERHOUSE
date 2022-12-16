class Producto {
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
 
  const producto1 = new Producto(1, 'Kansas Burger', 999, 1);
  const producto2 = new Producto(2, 'California Burger', 850, 1);
  const producto3 = new Producto(3, 'Zion Burger', 720, 1);
  const producto4 = new Producto(4, 'What Cheer Burger', 1200, 1);
  const producto5 = new Producto(5, 'Keota Burger', 1050, 1);
  
  const productos = [producto1, producto2, producto3, producto4];

  const contenedorProductos = document.getElementById('carta');

  if (localStorage.getItem("productoEnCarrito"))
  contenedorCarrito = JSON.parse (localStorage.getItem("productoEnCarrito"))

  productos.forEach((producto) => {
    const divProducto = document.createElement("div"); 
    divProducto.className = "carta__tarjeta"
    divProducto.innerHTML = `
                            <img src="fotos/${producto.id}.png" class="carta__imagen">
                            <h3 class="carta__titulo"> ${producto.nombre} </h3>
                            <p class="carta__precio"> $${producto.precio} </p>
                            <button id="boton${producto.id}" class="botonProducto"> Agregar al Carrito </button>`;
    contenedorProductos.appendChild(divProducto);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });

  const carrito = [];

  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();

    let carritoJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoJSON)
  };

  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const verCarrito = document.getElementById('verCarrito');
  
  verCarrito.addEventListener('click', actualizarCarrito);
  
  function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
      aux += `
            <img src="fotos/${producto.id}.png" class="carta__imagen">
            <h3 class="carta__titulo"> ${producto.nombre} </h3>
            <p class="carta__precio"> $${producto.precio} </p>
            <button onClick = "eliminarDelCarrito(${producto.id})" class="botonProducto"> Eliminar del Carrito </button>
            `;
    });
  
    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
  }

  const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
  });

  const totalCompra = document.getElementById('totalCompra');
  
  const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
  };
  
  const botonCompra = document.getElementById('comprar')

  botonCompra.addEventListener("click", mostrarCompra);

  function mostrarCompra(){
    Swal.fire({
      title: 'Listo',
      text: 'Tu compra fue realizada con éxito.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  };
  