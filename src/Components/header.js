import React, { Component } from 'react';
import '../index.css';
import Logo from '../Images/marca1.png';
import Estativa from '../Images/estativa_nova.jpg';

export default class Header extends Component{
    render(){
        return(
            <div className="nav-bar">

                <div className="nav-logo">
                    <img src={Logo} className="nav-logoimage" alt="logotipo"/>
                </div>
                    
                    <img src={Estativa} className="nav-estativa" alt="estativa"/>
              
                <ul className="nav-items"> 
                    <li className="nav-button" href="#">Início</li>
                    <li className="nav-button" href="#">Serviços</li>
                    <li className="nav-button" href="#">Referencias</li>
                    <li className="nav-button" href="#">Contato</li>
                </ul> 
       
            </div>
        )
    }
}

