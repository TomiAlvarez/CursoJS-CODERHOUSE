const burgers=[
    {nombre: "Kansas Burger", precio: 999}, 
    {nombre: "California Burger", precio: 850}, 
    {nombre: "Zion Burger", precio: 720}
];

const acompanamiento=[
    {nombre: "Papas Fritas", precio: 150},
    {nombre: "Aros de Cebolla", precio: 199},
    {nombre: "Nuggets", precio: 230}
];

const bebida=[
    {nombre: "Coca Cola", precio: 120}, 
    {nombre: "Fanta", precio: 120},
    {nombre: "Agua", precio: 200}
];

const combos=[
    {nombre: "Combo Kansas", precio: 1300}, 
    {nombre: "Combo California", precio: 1200},
];

function calcular (a, b) {
    return a + b
}

function ofertas (n1, n2) {
    return n1 * (n2 / 100) 
}

const MENU=parseInt(prompt("Bienvenido a Hood Burger! ¿Cuantas hamburguesas queres pedir? (solo números) - OFERTAS: Si llevas más de 2 hamburguesas tenés un 10% de descuento en todas!; 0=Salir."))

for (let i = 0; i < MENU; i++) {

    if (MENU == 1) {
        let burgerElegida=prompt("Menú: 1=Kansas Burger; 2=California Burger; 3=Zion Burger; 0=Salir.")
        if (burgerElegida == 1) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                const suma = calcular(burgers[0].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    const total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[0].precio, acompanamiento[1].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[0].precio, acompanamiento[2].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[0].precio, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[0].precio, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[0].precio, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + burgers[0].precio)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        } 
        else if (burgerElegida == 2) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                suma = calcular(burgers[1].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno;; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[1].precio, acompanamiento[1].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[1].precio, acompanamiento[2].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[1].precio, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[1].precio, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[1].precio, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + burgers[1].precio)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        } 
        if (burgerElegida == 3) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                suma = calcular(burgers[2].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[2].precio, acompanamiento[1].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[2].precio, acompanamiento[2].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + suma)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[2].precio, bebida[0].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[2].precio, bebida[1].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[2].precio, bebida[2].precio)
                    alert("El precio total de su compra es de: $" + total)
                }
                else if (BebidaElegida == 4) {
                    alert("El precio total de su compra es de: $" + burgers[2].precio)
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        } 
        else if (burgerElegida == 0) {
            break
        }
        else {
            alert("Ingrese una opción válida.")
            i--
        }
    }  
    else if (MENU > 1){
        let burgerElegida=prompt("Menú: 1=Kansas Burger; 2=California Burger; 3=Zion Burger; 0=Salir.")
        if (burgerElegida == 1) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                suma = calcular(burgers[0].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                    
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[0].precio, acompanamiento[1].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[0].precio, acompanamiento[2].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[0].precio, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[0].precio, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[0].precio, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(burgers[0].precio, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        } 
        else if (burgerElegida == 2) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                suma = calcular(burgers[1].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                    
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[1].precio, acompanamiento[1].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[1].precio, acompanamiento[2].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[1].precio, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[1].precio, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[1].precio, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(burgers[1].precio, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        }
        if (burgerElegida == 3) {
            let acompanamientoElegido=prompt("Acompañamiento: 1=Papas Fritas; 2=Aros de Cebolla; 3=Nuggets; 4=Ninguno; 0=Salir.")
            if (acompanamientoElegido == 1) {
                suma = calcular(burgers[2].precio, acompanamiento[0].precio)
                let BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                    
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 2) {
                suma = calcular(burgers[2].precio, acompanamiento[1].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 3) {
                suma = calcular(burgers[2].precio, acompanamiento[2].precio)
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(suma, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(suma, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(suma, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(suma, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegido == 4) {
                BebidaElegida=prompt("Bebida: 1=Coca Cola; 2=Fanta; 3=Agua; 4=Ninguno; 0=Salir.")
                if (BebidaElegida == 1) {
                    total = calcular(burgers[2].precio, bebida[0].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 2) {
                    total = calcular(burgers[2].precio, bebida[1].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 3) {
                    total = calcular(burgers[2].precio, bebida[2].precio)
                    descuento = ofertas(total, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 4) {
                    descuento = ofertas(burgers[2].precio, 90)
                    alert("El precio de su pedido es de: $" + descuento.toFixed())
                }
                else if (BebidaElegida == 0) {
                    break
                }
                else {
                    alert("Ingrese una opción válida.")
                    i--
                }
            }
            else if (acompanamientoElegida == 0) {
                break
            }
            else {
                alert("Ingrese una opción válida.")
                i--
            }
        }
        else if (burgerElegida == 0) {
            break
        }
        else {
            alert("Ingrese una opción válida.")
            i--
        }
    }
    else if (MENU == 0){
        break
    }
}
