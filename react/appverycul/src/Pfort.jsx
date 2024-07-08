import React, { useState } from 'react';
import pfort from './assets/pfort.png'

function Pfort() {
    const [count, setCount] = useState(0);
  
    const maxSize = 11; // Límite máximo del contador
    const imageSize = Math.min(count * 10, maxSize * 10); // Tamaño de la imagen limitado al máximo
  
    return (
      <>
        <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ zIndex: 1, textAlign: 'center' }}>
            <h1>KLOPF KLOPF</h1>
            <h3>wer ist da</h3>
            <button onClick={() => setCount((prevCount) => Math.min(prevCount + 1, maxSize))}>
              PFÖRT
            </button>
          </div>
          <img
            src={pfort}
            alt="Pfort Logo"
            style={{ 
              position: 'absolute', 
              zIndex: 0, 
              width: `${imageSize}px`, 
              height: `${imageSize}px`, 
              left: '50%', 
              top: '50%', 
              transform: `translate(-50%, -50%) scale(${count > 0 ? count : 1})`, 
              transition: 'transform 0.5s ease'
            }}
          />
        </div>
      </>
    );
  }
  
  export default Pfort;