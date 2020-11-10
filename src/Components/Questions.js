/*export const QUESTIONS = [
    {   pregunta: "Pregunta",
        Respuestas: [
            {   respuesta:"Si", 
                continua:{pregunta2:"", opciones: [1, 2, 3]}, 
                recomendaciones:[
                    {rangoRespuesta: {min: 0, max:1}, alerta:"verde", recomendacion: "" },
                ] 
            }, 
            {   respuesta:"No", 
                continua: null
            }
        ]

    }
]*/

export const alertasVomito = [
    {
        verde: {name:"verde", recomendacion:"Tomar los antieméticos"},
        amarillo: {name:"amarillo", recomendacion:"Tomar mucho líquido y los medicamentos (ondasetron, metoclopramida)"},
        amarillonau: {name:"amarillo", recomendacion:"Tomar los antieméticos"},
        rojo: {name:"rojo", recomendacion:"Consulta por urgencias"},
    }
]

export const alertasDiarrea = [
    {
        verde: {name:"verde", recomendacion:"Tomar mucho líquido y líquidos naturales"},
        amarillo: {name:"amarillo", recomendacion:"Tomar mucho líquido y el antidiarreico (loperamida)"},
        rojo: {name:"rojo", recomendacion:"Consulta por urgencias"},
    }
]

export const alertasApetito = [
    {
        verde: {name:"verde", recomendacion:""},
        amarillo: {name:"amarillo", recomendacion:"Recomendación de comer para no volverse alerta roja"},
        amarillo3: {name:"amarillo", recomendacion:""},
        rojo: {name:"rojo", recomendacion:"Consulta por urgencias"},
    }
]

export const alertasFatiga = [
    {
        verde: {name:"verde", recomendacion:""},
        rojo: {name:"rojo", recomendacion:"Consulta por urgencias"},
    }
]

export const alertasFiebre = [
    {
        verde: {name:"verde", recomendacion:""},
        rojo: {name:"rojo", recomendacion:"Realizar medios físicos, tomar acetaminofén, consulta por urgencias"},
    }
]

export const alertasOrinar = [
    {
        amarillo: {name:"amarillo", recomendacion:"Tomar mínimo ocho (8) vasos de agua al día"},
        amarillonaranja: {name:"amarillo", recomendacion:"Consulta con el médico"},
    }
]

export const alertasSangrado = [
    {
        verde: {name:"verde", recomendacion:""},
        amarillo: {name:"amarillo", recomendacion:"Seguimiento del sangrado"},
        rojo: {name:"rojo", recomendacion:"Consulta por urgencias"},
    }
]