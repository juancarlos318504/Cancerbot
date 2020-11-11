import React from "react";
import './Alert.css'
import firebase from '../Services/FirebaseConfig';
import exclamacion from '../Images/exclamacion.png';

class Alert extends React.Component {

    constructor (props, context){
        super(props, context);
        
        this.state = {
            ready: false,
            AlertColor: "",
            AlertText:""
        };

        this.getAlert = this.getAlert.bind(this);
    }

    alert = <div>hola</div>
    listaRecomendaciones = [];
    mensaje= "";
    mensaje2= "";

    componentDidMount(){
        setTimeout(() => {this.getAlert();}, 1500);
        
    }

    getAlert(){
        const json = JSON.parse(localStorage.getItem("datos"))

        var respuestas={
            "NAUSEAS-Y-VOMITO":{
                Respuesta: json.p1options.value,
                Intensidad: json.p1Aoptions? json.p1Aoptions.message : 0,
                Alerta: json.p1Aoptions? json.p1Aoptions.metadata.name : "verde",
                Recomendacion: json.p1Aoptions? json.p1Aoptions.metadata.recomendacion: ""
            },

            "DIARREA":{
                Respuesta: json.p2options.value,
                Intensidad: json.p2Aoptions? json.p2Aoptions.message : 0,
                Alerta: json.p2Aoptions? json.p2Aoptions.metadata.name : "verde",
                Recomendacion: json.p2Aoptions? json.p2Aoptions.metadata.recomendacion: ""
            },

            "FALTA-DE-APETITO":{
                Respuesta: json.p3options.value,
                Intensidad: json.p3Aoptions? json.p3Aoptions.message : 0,
                Alerta: json.p3Aoptions? json.p3Aoptions.metadata.name : "verde",
                Recomendacion: json.p3Aoptions? json.p3Aoptions.metadata.recomendacion: ""
            },

            "FATIGA":{
                Respuesta: json.p4options.value,
                Intensidad: json.p4Aoptions? json.p4Aoptions.message : 0,
                Alerta: json.p4Aoptions? json.p4Aoptions.metadata.name : "verde",
                Recomendacion: json.p4Aoptions? json.p4Aoptions.metadata.recomendacion: ""
            },

            "FIEBRE":{
                Respuesta: json.p5options.value,
                Intensidad: json.p5Aoptions? json.p5Aoptions.message : 0,
                Alerta: json.p5Aoptions? json.p5Aoptions.metadata.name : "verde",
                Recomendacion: json.p5Aoptions? json.p5Aoptions.metadata.recomendacion: ""
            },

            "DIFICULTAD-PARA-ORINAR":{
                Respuesta: json.p6options.value,
                Intensidad: json.p6Aoptions? json.p6Aoptions.message : 0,
                Alerta: json.p6Aoptions? json.p6Aoptions.metadata.name : "verde",
                Recomendacion: json.p6Aoptions? json.p6Aoptions.metadata.recomendacion: ""
            },

            "SANGRADO":{
                Respuesta: json.p7options.value,
                Intensidad: json.p7Aoptions? json.p7Aoptions.message : 0,
                Alerta: json.p7Aoptions? json.p7Aoptions.metadata.name : "verde",
                Recomendacion: json.p7Aoptions? json.p7Aoptions.metadata.recomendacion: ""
            }
        }

        var today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) +'-'+ today.getFullYear() ;

        var verdes = 0;
        var amarillos = 0;
        var rojos = 0;
        var rojosGraves = 0;

        //console.log(respuestas);
        
        firebase.ref('usuarios/' + localStorage.getItem("identificationNumber")).update({
            [date]:respuestas
        }, (error) => {
            if (error) {
              console.log(error)
            } else {

                Object.keys(respuestas).map((item, keys)=>{
                    console.log(respuestas[item] )
                    
                    switch (respuestas[item].Alerta) {
                        case 'rojo':
                            if(item == "FATIGA" || item == "FIEBRE" || item == "SANGRADO"){
                                rojosGraves +=1;
                            }
                            else{
                                rojos += 1;
                            }
                            
                            break;

                        case 'verde':
                            verdes +=1;
                            break;
                        
                        case 'amarillo':
                            amarillos +=1;
                            break;
                    } 
                    if(respuestas[item].Recomendacion!="" && respuestas[item].Recomendacion!="Consulta por urgencias"){
                        this.listaRecomendaciones.push (respuestas[item].Recomendacion); 
                    }
 
                })

                if(amarillos == 0 && rojosGraves ==0 && rojos==0){
                    this.mensaje = <p>Gracias por su espera. Le informo que sus signos y síntomas están dentro de los parámetros normales establecidos por su especialista. No hay de que alarmarse, por favor continue con las recomendaciones dadas por su médico. <br/><br/> Esta información es enviada a su especialista y grupo de trabajo para el seguimiento y monitoreo de su caso. <br/><br/> Lo espero el día de mañana para realizar un nuevo registro de signos y síntomas. <br/><br/>¡¡Que tenga un buen día!!</p>
                    this.mensaje2 = "";
                    this.setState({
                        AlertColor:"green",
                        AlertText: "Alerta verde"
                    })
                }

                else if( rojos == 1 || amarillos > 0){
                    this.mensaje = <p>Gracias por su espera. Le informo que sus signos y síntomas presentan una alteración considerable, por favor siga las siguientes recomendaciones:</p>
                    this.mensaje2 =<p>Si los síntomas no mejoran por favor realice una consulta vía telefónica con su médico tratante. De igual forma, le informaremos al grupo de especialistas para que se contacte con usted.</p>
                    this.setState({
                        AlertColor:"goldenrod",
                        AlertText: "Alerta amarilla"
                    })
                }
                
                else if(rojosGraves != 0 || rojos >= 2){
                    this.mensaje = <p>Gracias por su espera. Le informo que sus signos y síntomas presentan una alteración prioritaria, por favor siga las siguientes recomendaciones:</p>
                    this.mensaje2 =<p>Se informará inmediatamente a su médico tratante para realizar el seguimiento.</p>
                    this.listaRecomendaciones.push("Consulta por urgencias");
                    this.setState({
                        AlertColor:"red",
                        AlertText: "Alerta roja"
                    })
                }
                
                this.alert =
                <div className="o-alert-container2">
                    <div className="o-alert-content">
                        <div className="o-image-container">
                            <div className="o-circle" style={{backgroundColor:this.state.AlertColor}}>
                                <img src={exclamacion}></img>
                            </div>
                            <h1 style={{color: this.state.AlertColor}}>{this.state.AlertText}</h1>
                        </div>
                        {this.mensaje}
                        <ul>
                            { this.listaRecomendaciones.map((recomendacion, key)=> {
                                return <li>{recomendacion}</li>
                                }) 
                            }
                        </ul>
                        {this.mensaje2}

                        <button onClick={()=>this.props.history.push('/')} className="o-salida-button">SALIDA</button>
                    </div>
                    
                    
                </div>

                this.setState({ready:true});
            }
          });
    }

    render(){
        if(!this.state.ready){
            return (
                <div className="o-alert-container">
                    <div>
                        <h3>Agradecemos su registro de signos y síntomas. Por favor espere un momento mientras sus datos están siendo analizados</h3>
                        <h2>PROCESANDO...</h2>
                    </div>
                    
                </div>
            );
        }
        return (this.alert);
    }
};

export default Alert;