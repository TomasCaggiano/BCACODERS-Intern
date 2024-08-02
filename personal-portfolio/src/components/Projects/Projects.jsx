import React from 'react';
import './Projects.css';
import Products from '../Products/Products';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-heading'>My Projects</h1>
      <div className='projects-grid'>

        <Products
          img="/images/firebase.PNG"
          title="e-commerce-firebase"
          desc="Este proyecto de e-commerce implementado con Firebase y React ofrece una solución robusta para la gestión y visualización de productos en línea. Utilizando Firestore para el almacenamiento de datos y Firebase Authentication para la autenticación de usuarios,
          el sitio proporciona una experiencia segura y personalizada. El diseño responsive garantiza una navegación fluida en dispositivos móviles y de escritorio, mientras que la integración con Firebase Hosting asegura un despliegue eficiente y escalable.
          Funcionalidades clave incluyen la gestión dinámica de productos, carrito de compras persistente y un flujo de compra completo, demostrando habilidades avanzadas en el desarrollo front-end y la implementación de soluciones en la nu"
          link="Ver más"
          url="https://e-commerce-firebase1.netlify.app/"
        />
        
        <Products
          img="/images/api.PNG"
          title="e-commerce-API"
          desc="Este proyecto de e-commerce desarrollado con React y Bootstrap ofrece una plataforma robusta para compras en línea, enfocándose en una experiencia de usuario fluida y adaptable. Integrado con una API para la gestión dinámica de productos, 
          el sitio permite a los usuarios buscar, filtrar y agregar artículos al carrito de manera intuitiva. El diseño responsive asegura una navegación consistente en dispositivos móviles y de escritorio, mientras que la configuración optimizada con Vite facilita un despliegue eficiente en GitHub Pages. 
          Con funcionalidades esenciales como la gestión de carritos y un proceso de compra simulado, este proyecto no solo exhibe competencia en desarrollo front-end, sino también la capacidad para implementar soluciones escalables y adaptativas para negocios de e-commerce."
          link="Ver más"
          url="https://tomascaggiano.github.io/e-commerce-ap-/"
        />
      </div>
    </div>
  );
}

export default Projects;
