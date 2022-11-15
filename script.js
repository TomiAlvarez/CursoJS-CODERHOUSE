const flores=[
    {calle: "pedernera", precio: 45000}, 
    {calle: "alberdi", precio: 52000}, 
    {calle: "rivadavia", precio: 90000}
];

const caballito=[
    {calle: "ortega", precio: 105000},
    {calle: "espinosa", precio: 44500},
    {calle: "campichuelo", precio: 75000}
];

const belgrano=[
    {calle: "echeverria", precio: 70000}, 
    {calle: "migueletes", precio: 41000}, 
    {calle: "conesa", precio: 69000}
];

const boedo=[
    {calle: "constitucion", precio: 120000}, 
    {calle: "maza", precio: 148000}, 
    {calle: "tarija", precio: 97000}
]

let menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir."))

while (menu != 0){

    if (menu==1) {
        let calleElegida=prompt("Elija calle: Pedernera - Alberdi - Rivadavia").toLowerCase()
        alert(JSON.stringify(flores.find((flores) => flores.calle === calleElegida)))
        menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir.")) 
    }  
    else if (menu==2){
        calleElegida=prompt("Elija calle: Ortega - Espinosa - Campichuelo").toLowerCase()
        alert(JSON.stringify(caballito.find((caballito) => caballito.calle === calleElegida)))
        menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir."))
    }
    else if (menu==3){
        calleElegida=prompt("Elija calle: Echeverria - Migueletes - Conesa").toLowerCase()
        alert(JSON.stringify(belgrano.find((belgrano) => belgrano.calle === calleElegida)))
        menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir."))
    }
    else if (menu==4){
        calleElegida=prompt("Elija calle: Constitusion - Maza - Tarija").toLowerCase()
        alert(JSON.stringify(boedo.find((boedo) => boedo.calle === calleElegida)))
        menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir."))
    }
    else {
        alert("Ingrese una opción válida.")
        menu=parseInt(prompt("¿En que barrio desea alquilar vivienda? 1=Flores; 2=Caballito; 3=Belgrano; 4=Boedo; 0=Salir."))
    }

}