import React from "react";
import './Login.css'
import firebase from '../Services/FirebaseConfig';
import logo from '../Images/logo.png';

class Login extends React.Component {

    constructor (props, context){
        super(props, context);


        // Prepare simple state
        this.state = {
            value:"",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        //alert(this.state.value)

        let ref = firebase.ref("usuarios/" + this.state.value);
        ref.on('value', snapshot => {
            const state = snapshot.val();
            console.log(state)
            if(state != null){
                localStorage.setItem("identificationNumber", this.state.value)
                this.props.history.push("/Chat");
            }
            else{
                alert("Lo sentimos, El número de identificación ingresado no existe en nuestra base de datos");
            }
            
        });
    }

    json={
        "09-11-2020": {
            Diarrea: {
                Respuesta: "no",
                Intensidad:"0",
                Alerta: "verde",
            }
        }
    }

    render(){
        return (
            <div className="o-login-container">
                <img src={logo} className="o-logo-login"></img>
                <h3 className="o-text-login">BIENVENIDO A LA PLATAFORMA DE MONITOREO DE SIGNOS Y SÍNTOMAS EN CASA</h3>
                <form onSubmit={this.handleSubmit} className="o-form-login" >
                    <label className="o-text-login">POR FAVOR INGRESE SU NÚMERO DE IDENTIFICACIÓN</label>
                    <input type="number" id="input-identification" value={this.state.value} onChange={this.handleChange}/>
                    
                    <input type="submit" value="CONTINUAR" id="submit"/>
                </form>
            </div>
        );
    }
};

export default Login;