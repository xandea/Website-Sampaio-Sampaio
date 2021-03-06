import React, { Component } from 'react';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import '../index.css';
import Logo from '../Images/estativa.jpg';
import Estrutura from '../Images/estrutura.jpeg';
import Assistencia from '../Images/assistencia.jpeg';

export default class Services extends Component{
    render(){
        return(
            <div className="home">
              <h1 className="services-textbig">Serviços</h1>
              <CardView items={items} activeColor='#000' imageHeight='550px' imageWidth='550px'/>
            </div>
        )
    }
}

const items = [
    {
      id: 1,
      header: 'Estativa e Foco Cirúrgico',
      description:
        'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
      image: Logo
    },
    {
      id: 2,
      header: 'Suporte de Fixação',
      description:
        'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
      image: Estrutura
    },
    {
      id: 3,
      header: 'Visita Técnica',
      description:
        'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
      image: Assistencia
    },
    {
      id: 4,
      header: 'Proin et urna',
      description:
        'vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.',
      image: 'image-src'
    },
    {
      id: 5,
      header: 'Cras leo velit',
      description:
        'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
      image: 'image-src'
    }
  ]