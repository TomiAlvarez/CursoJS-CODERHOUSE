const CANTIDAD=parseInt(prompt("Ingrese la cantidad de miembros que desean participar (solo números)"))

for(i=0;i<CANTIDAD;i++){
    let nombre=prompt("Ingrese nombre").toUpperCase()
    let apellido=prompt("Ingrese apellido").toUpperCase()
    let edad
    const FECHANACIMIENTO=parseInt(prompt("Ingrese su año de nacimiento (solo números)"))

    edad=2022-FECHANACIMIENTO

    if (nombre =="" || apellido ==""){
        alert("Ingrese nombre y apellido")
        i--
    }
    else if (edad < 0){
        alert("Ingrese un año válido")
        i--
    }
    else if (edad <= 5){
        console.log("Bienvenido/a madre/padre/tutor de", nombre , apellido, ", el/ella tiene", edad, "años de edad y es un bebé.")
    }
    else if (edad <= 12){
        console.log("Bienvenido/a", nombre , apellido + ", tenés", edad, "años de edad y sos un niño.")
    }
    else if (edad <=25){
        console.log("Bienvenido/a", nombre , apellido + ", tenés", edad, "años de edad y sos un adolescente.")
    }
    else if (edad <=65){
        console.log("Bienvenido/a", nombre , apellido + ", usted tiene", edad, "años de edad y es un adulto.")
    }
    else if (edad <=120){
        console.log("Bienvenido", nombre , apellido + ", usted tiene", edad, "años de edad y es un anciano.")
    }
    else{
        alert("Ingrese un año válido")
        i--
    }
}

