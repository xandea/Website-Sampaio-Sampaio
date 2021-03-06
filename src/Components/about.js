import React, { Component } from 'react';
import '../index.css';
import Image from '../Images/estativa_nova.png';
import Image2 from '../Images/foco2_recorte2.jpg';

export default class About extends Component{
    render(){
        return(
            <div className="about-row">
                <div className="about-column">
                    <img src={Image2} alt="alenxadre e leila" className="about-image" />
                </div>
                <div className="about-column">
                   <p className="about-textbig">Sobre nós</p>
                   <p className="about-textsmall">Estamos presente no mercado de Instalação de Equipamentos Cirúrgicos à X anos, trabalhamos para os maiores hospitais do país e oferecemos a melhor qualidade do mercado. Temos certificação pela Drager, Hillrom, Mindray e Paramoun bed</p>
                </div>
                
            </div>
            
        )
    }
}