/** */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './Chat.css'


class Review extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      r1: '',
    };
  }

  componentWillMount() {
    
    //this.setState({ name, gender, age });
  }
  componentDidMount() {
    const { steps } = this.props;
    const { p1options } = steps;
    localStorage.setItem("datos", JSON.stringify(steps));
    console.log(p1options.message)
    this.props.history.push('/Alert')
    
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
        { value: 'amarillo', label: 'Nauseas', trigger: 'p2' },
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
        { value: "verde", label: '1', trigger: 'p2' },
        { value: "verde", label: '2', trigger: 'p2' },
        { value: "verde", label: '3', trigger: 'p2' },
        { value: "amarillo", label: '4', trigger: 'p2' },
        { value: "amarillo", label: '5', trigger: 'p2' },
        { value: "amarillo", label: '6', trigger: 'p2' },
        { value: "rojo", label: 'más de 6', trigger: 'p2' },
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
      message: '¿Número de deposiciones al día',
      trigger: 'p2Aoptions',
    },
    {
      id: 'p2Aoptions',
      options: [
        { value: "verde", label: '1', trigger: 'p3' },
        { value: "verde", label: '2', trigger: 'p3' },
        { value: "verde", label: '3', trigger: 'p3' },
        { value: "amarillo", label: '4', trigger: 'p3' },
        { value: "amarillo", label: '5', trigger: 'p3' },
        { value: "amarillo", label: '6', trigger: 'p3' },
        { value: "amarillo", label: '7', trigger: 'p3' },
        { value: "rojo", label: 'más de 8', trigger: 'p3' },
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
        { value: "rojo", label: '2 días con una alimentación al día', trigger: 'p4' },
        { value: "amarillo", label: '2 veces', trigger: 'p4' },
        { value: "amarillo", label: '3 veces', trigger: 'p4' },
        { value: "verde", label: '4 veces', trigger: 'p4' },
        { value: "verde", label: '5 veces', trigger: 'p4' },
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
        { value: "verde", label: 'De 18 a 24 RPM', trigger: 'p5' },
        { value: "rojo", label: 'Más de 24 RPM', trigger: 'p5' },
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
        { value: "verde", label: 'Menos de 38º', trigger: 'p6' },
        { value: "rojo", label: '38º o más', trigger: 'p6' },
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
        { value: "amarillo", label: '1', trigger: 'p7' },
        { value: "amarillo", label: '2', trigger: 'p7' },
        { value: "amarillo", label: '3', trigger: 'p7' },
        { value: "amarillo", label: '4', trigger: 'p7' },
        { value: "amarillo", label: '5', trigger: 'p7' },
        { value: "amarillo", label: '6', trigger: 'p7' },
        { value: "rojo", label: '7', trigger: 'p7' },
        { value: "rojo", label: '8', trigger: 'p7' },
        { value: "rojo", label: '9', trigger: 'p7' },
        { value: "rojo", label: '10', trigger: 'p7' },
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
        { value: "verde", label: '1 vez', trigger: 'final' },
        { value: "amarillo", label: '2 veces', trigger: 'final' },
        { value: "amarillo", label: '3 veces', trigger: 'final' },
        { value: "amarillo", label: '4 veces', trigger: 'final' },
        { value: "rojo", label: '5 o más veces', trigger: 'final' },
      ],
    },
    



    {
      id: 'final',
      component: <Review history={this.props.history}/>,
      asMessage: true,
      trigger: 'end-message',
    },
    {
      id: 'end-message',
      message: 'A continuación se le mostrarán las recomendaciones pertinentes',
      end: true,
    },
  ]


  render() {
    return (
      <div className="o-container">
        <ChatBot
          steps={this.data}
        />
        
      </div>

    );
  }
}

export default Chat;