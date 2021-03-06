import React, { Component } from 'react';
import '../index.css';
import Sala from '../Images/sala-contato.jpeg';

export default class Contato extends Component{
    render(){
        return(
            <div className="contato-container">
                <img  className="contato-background" src={Sala} alt="Sala cirurgica"/>
                <div className="contato-text">Email: sampaio_sampaio7@yahoo.com.br</div>
            </div>
        )
    }

}