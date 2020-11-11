/** */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './Chat.css'
import {alertasVomito,alertasDiarrea,alertasApetito,alertasFatiga,alertasFiebre,alertasOrinar,alertasSangrado,} from './Questions'


class Review extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      r1: '',
    };
  }

  
  componentDidMount() {
    setTimeout(() => { 
      const { steps } = this.props;
      console.log("cambiando ruta");
      localStorage.setItem("datos", JSON.stringify(steps));
      //console.log(p1Aoptions)
      this.props.history.push('/Alerta')
     }, 1500);
    
  }

  render() {
    //const { name, gender, age } = this.state;
    
    return (
      <div style={{ width: '100%' }}>
        <h3>Analizando datos...</h3>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


class Chat extends Component {


  data = [
    /*{
      id: 'init',
      message: '->',
      trigger: 'welcome',
    },*/
    {
      id: 'welcome',
      message: 'Buenos días, espero que se encuentre bien hoy, vamos a iniciar con el registro de sus síntomas',
      trigger: 'p1',
    },
    {
      id: 'p1',
      message: '¿Ha tenido nauseas o vómito?',
      trigger: 'p1options',
    },
    {
      id: 'p1options',
      options: [
        { value: 'Nauseas', label: 'Nauseas', trigger: 'p2', metadata: alertasVomito[0].amarillonau },
        { value: 'Vomito', label: 'Vómito', trigger: 'p1A' },
        { value: 'No', label: 'Ninguno', trigger: 'p2' },
      ],
    },
    {
      id: 'p1A',
      message: '¿Número de episodios de vómito al día',
      trigger: 'p1Aoptions',
    },
    {
      id: 'p1Aoptions',
      options: [
        { value: 1, metadata: alertasVomito[0].verde, label: '1', trigger: 'p2' },
        { value: 2, metadata: alertasVomito[0].verde, label: '2', trigger: 'p2' },
        { value: 3, metadata: alertasVomito[0].verde, label: '3', trigger: 'p2' },
        { value: 4, metadata: alertasVomito[0].amarillo, label: '4', trigger: 'p2' },
        { value: 5, metadata: alertasVomito[0].amarillo, label: '5', trigger: 'p2' },
        { value: 6, metadata: alertasVomito[0].amarillo, label: '6', trigger: 'p2' },
        { value: 7, metadata: alertasVomito[0].rojo, label: 'más de 6', trigger: 'p2' },
      ],
    },
    {
      id: 'p2',
      message: '¿Ha tenido diarrea?',
      trigger: 'p2options',
    },
    {
      id: 'p2options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p2A' },
        { value: 'No', label: 'No', trigger: 'p3' },
      ],
    },
    {
      id: 'p2A',
      message: 'Número de deposiciones al día',
      trigger: 'p2Aoptions',
    },
    {
      id: 'p2Aoptions',
      options: [
        { value: 1, metadata: alertasDiarrea[0].verde, label: '1', trigger: 'p3' },
        { value: 2, metadata: alertasDiarrea[0].verde, label: '2', trigger: 'p3' },
        { value: 3, metadata: alertasDiarrea[0].verde, label: '3', trigger: 'p3' },
        { value: 4, metadata: alertasDiarrea[0].amarillo, label: '4', trigger: 'p3' },
        { value: 5, metadata: alertasDiarrea[0].amarillo, label: '5', trigger: 'p3' },
        { value: 6, metadata: alertasDiarrea[0].amarillo, label: '6', trigger: 'p3' },
        { value: 7, metadata: alertasDiarrea[0].amarillo, label: '7', trigger: 'p3' },
        { value: 8, metadata: alertasDiarrea[0].rojo, label: 'más de 7', trigger: 'p3' },
      ],
    },
    {
      id: 'p3',
      message: '¿Ha tenido disminución en la ingesta de alimentos?',
      trigger: 'p3options',
    },
    {
      id: 'p3options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p3A' },
        { value: 'No', label: 'No', trigger: 'p4' },
      ],
    },
    {
      id: 'p3A',
      message: '¿Cuántas veces al día ingiere alimentos?',
      trigger: 'p3Aoptions',
    },
    {
      id: 'p3Aoptions',
      options: [
        { value: 1, metadata: alertasApetito[0].rojo, label: '2 días con una alimentación al día', trigger: 'p4' },
        { value: 2, metadata: alertasApetito[0].amarillo, label: '2 veces', trigger: 'p4' },
        { value: 3, metadata: alertasApetito[0].amarillo3, label: '3 veces', trigger: 'p4' },
        { value: 4, metadata: alertasApetito[0].verde, label: '4 veces', trigger: 'p4' },
        { value: 5, metadata: alertasApetito[0].verde, label: '5 veces', trigger: 'p4' },
      ],
    },
    {
      id: 'p4',
      message: '¿Tiene dificultad para respirar?',
      trigger: 'p4options',
    },
    {
      id: 'p4options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p4A' },
        { value: 'No', label: 'No', trigger: 'p5' },
      ],
    },
    {
      id: 'p4A',
      message: '¿Cuántas respiraciones realiza en un minuto',
      trigger: 'p4Aoptions',
    },
    {
      id: 'p4Aoptions',
      options: [
        { value: 'De 18 a 24 RPM', metadata: alertasFatiga[0].verde, label: 'De 18 a 24 RPM', trigger: 'p5' },
        { value: 'Más de 24 RPM', metadata: alertasFatiga[0].rojo, label: 'Más de 24 RPM', trigger: 'p5' },
      ],
    },
    {
      id: 'p5',
      message: '¿Ha tenido fiebre en las últimas 24 horas?',
      trigger: 'p5options',
    },
    {
      id: 'p5options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p5A' },
        { value: 'No', label: 'No', trigger: 'p6' },
      ],
    },
    {
      id: 'p5A',
      message: '¿Cuánto registró el termómetro',
      trigger: 'p5Aoptions',
    },
    {
      id: 'p5Aoptions',
      options: [
        { value: 'Menos de 38º', metadata: alertasFiebre[0].verde, label: 'Menos de 38º', trigger: 'p6' },
        { value: '38º o más', metadata: alertasFiebre[0].rojo, label: '38º o más', trigger: 'p6' },
      ],
    },
    {
      id: 'p6',
      message: '¿Ha presentado ardor o dolor para orinar?',
      trigger: 'p6options',
    },
    {
      id: 'p6options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p6A' },
        { value: 'No', label: 'No', trigger: 'p7' },
      ],
    },
    {
      id: 'p6A',
      message: 'Califique de 1 a 10 la intensidad de dolor, siendo 10 un dolor severo',
      trigger: 'p6Aoptions',
    },
    {
      id: 'p6Aoptions',
      options: [
        { value: 1, metadata: alertasOrinar[0].amarillo, label: '1', trigger: 'p7' },
        { value: 2, metadata: alertasOrinar[0].amarillo, label: '2', trigger: 'p7' },
        { value: 3, metadata: alertasOrinar[0].amarillo, label: '3', trigger: 'p7' },
        { value: 4, metadata: alertasOrinar[0].amarillo, label: '4', trigger: 'p7' },
        { value: 5, metadata: alertasOrinar[0].amarillo, label: '5', trigger: 'p7' },
        { value: 6, metadata: alertasOrinar[0].amarillo, label: '6', trigger: 'p7' },
        { value: 7, metadata: alertasOrinar[0].amarillonaranja, label: '7', trigger: 'p7' },
        { value: 8, metadata: alertasOrinar[0].amarillonaranja, label: '8', trigger: 'p7' },
        { value: 9, metadata: alertasOrinar[0].amarillonaranja, label: '9', trigger: 'p7' },
        { value: 10, metadata: alertasOrinar[0].amarillonaranja, label: '10', trigger: 'p7' },
      ],
    },
    {
      id: 'p7',
      message: '¿Ha presentado sangrado?',
      trigger: 'p7options',
    },
    {
      id: 'p7options',
      options: [
        { value: 'Sí', label: 'Sí', trigger: 'p7A' },
        { value: 'No', label: 'No', trigger: 'final' },
      ],
    },
    {
      id: 'p7A',
      message: '¿Cuántas veces ha presentado sangrado en las últimas 24 horas?',
      trigger: 'p7Aoptions',
    },
    {
      id: 'p7Aoptions',
      options: [
        { value: 1, metadata: alertasSangrado[0].verde, label: '1 vez', trigger: 'final' },
        { value: 2, metadata: alertasSangrado[0].amarillo, label: '2 veces', trigger: 'final' },
        { value: 3, metadata: alertasSangrado[0].amarillo, label: '3 veces', trigger: 'final' },
        { value: 4, metadata: alertasSangrado[0].amarillo, label: '4 veces', trigger: 'final' },
        { value: 5, metadata: alertasSangrado[0].rojo, label: '5 o más veces', trigger: 'final' },
      ],
    },
    
    {
      id: 'final',
      message: 'A continuación se le mostrarán las recomendaciones pertinentes',
      trigger: 'submit',
    },


    {
      id: 'submit',
      component: <Review history={this.props.history}/>,
      //message: "El análisis ha terminado",
      trigger: ()=>console.log("Terminadooooo"),
      end: true
    },
    /*{
      id: 'end-message',
      message: 'El análisis ha terminado',
      end: true,
    },*/
  ]


  render() {
    return (
      <div className="o-container">
        <h2>REGISTRO DE SÍNTOMAS</h2>
        <div style={{width:"90%", display:"flex", justifyContent:"center"}}>
          <ChatBot
            speechSynthesis={{ enable: true, lang: 'es' }}
            steps={this.data}
            headerTitle="CANCERBOT"
            placeholder="Selecciona tu respuesta"
          />
        </div>
        
        
      </div>

    );
  }
}

export default Chat;