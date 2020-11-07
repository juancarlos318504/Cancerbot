export const QUESTIONS = [
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
]