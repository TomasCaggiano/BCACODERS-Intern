import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const fullname = 'Tomas Caggiano';
  const [text, setText] = useState('');
  const fulltext = 'web developer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullname.length) {
        setName(fullname.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Ajusta la velocidad de la animación aquí (milisegundos)

    return () => clearInterval(interval);
  }, [fullname]);

  useEffect(() => {
    let index = 0;
    const inicio = setTimeout(()=>{
    const interval = setInterval(() => {
      if (index < fulltext.length) {
        setText(fulltext.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Ajusta la velocidad de la animación aquí (milisegundos)
  }, 2100)
    return () => clearInterval(inicio);
  }, [fulltext]);
  
  return (
    <div className='home'>
      <div>
      <h1>{name}</h1>
      <h2>{text}</h2>
      <p>Bienvenido a mi portafolio. Soy un desarrollador Front-end apasionado por crear experiencias web dinámicas y funcionales.</p>
      </div>
      <img src='/images/foto.jpeg' alt="foto" />
    </div>
  );
};

export default Home;
