/*import React, { useState, useRef, useEffect } from 'react';
import './Toque.css';

const Toque = () => {
  const [areas, setAreas] = useState({
    cabecaDireita: null,
    cabecaEsquerda: null,
    bochechaDireita: null,
    bocaDireita: null,
    peitoEsquerdo: null,
    peitoDireito: null,
    cotovelo: null,
    maoDireita: null,
    genitalia: null,
    pernaEsquerdaSuperior: null,
    pernaEsquerdaInferior: null,
    pernaDireitaSuperior: null,
    pernaDireitaInferior: null,
    ombroEsquerdo: null,
    dorso: null,
    bunda: null,
  });

  const [message, setMessage] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const areaRefs = useRef({});
  const totalAreas = Object.keys(areas).length;

  const correctBalls = {
    cabecaDireita: 'verde',
    cabecaEsquerda: 'verde',
    bochechaDireita: 'amarela',
    bochechaEsquerda: 'amarela',
    bocaDireita: 'vermelha',
    peitoEsquerdo: 'vermelha',
    peitoDireito: 'vermelha',
    cotovelo: 'verde',
    maoDireita: 'verde',
    genitalia: 'vermelha',
    pernaEsquerdaSuperior: 'amarela',
    pernaEsquerdaInferior: 'verde',
    pernaDireitaSuperior: 'amarela',
    pernaDireitaInferior: 'amarela',
    ombroEsquerdo: 'verde',
    dorso: 'verde',
    bunda: 'vermelha',
  };

  const dicas = {
    verde: 'Esta é uma região onde o toque costuma ser seguro.',
    amarela: 'Dica: Esta é uma região que ao ser tocada por outra pessoa precisamos ficar atentos. Se não se sentir confortável, não deve ser tocada.',
    vermelha: 'Dica: Esta é uma região privada. Ninguém deve tocá-la sem sua permissão.',
  };

  const handleDrop = (e, area) => {
    e.preventDefault();
    const bolaId = e.dataTransfer.getData('bola');
    const areaElement = areaRefs.current[area];

    if (correctBalls[area] === bolaId) {
      const newBall = document.createElement('div');
      newBall.className = `ball ${bolaId} fixed`;
      newBall.style.position = 'absolute';
      newBall.style.top = '50%';
      newBall.style.left = '50%';
      newBall.style.transform = 'translate(-50%, -50%)';
      newBall.style.width = '100%';
      newBall.style.height = '100%';
      areaElement.innerHTML = '';
      areaElement.appendChild(newBall);

      setMessage('');
      setAreas((prev) => ({ ...prev, [area]: bolaId }));
      setCorrectCount((prev) => prev + 1);
    } else {
      setMessage(dicas[correctBalls[area]]);
    }
  };

  const handleDragStart = (e, bolaId) => {
    e.dataTransfer?.setData('bola', bolaId);
  };

  const handleTouchStart = (e, bolaId) => {
    e.preventDefault();
    handleDragStart({ dataTransfer: { setData: () => {} } }, bolaId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (correctCount === totalAreas) {
      setMessage('Parabéns! Você completou todas as áreas corretamente!');
    }
  }, [correctCount, totalAreas]);

  return (
    <div className="container">
      <header className="header">
        <h2 className="university-name">Semáforo do Toque</h2>
      </header>

      <div className="instructions">
        <p>Arraste as bolinhas para as partes do corpo corretas. Cada cor tem um significado:</p>
        <ul>
          <li><span className="ball verde"></span> Verde: Regiões seguras para o toque.</li>
          <li><span className="ball amarela"></span> Amarelo: Regiões para ficar atento.</li>
          <li><span className="ball vermelha"></span> Vermelho: Regiões que não devem ser tocadas sem permissão.</li>
        </ul>
        <p>Se você errar, receberá uma dica para aprender mais!</p>
      </div>

      <div className="content">
        <h1>Áreas do Corpo</h1>

        <p className="message-overlay">{message}</p>

        <div className="game-container">
          <div className="person">
            <img src="/crianca.png" alt="Criança" className="image" />
            {Object.keys(areas).map((area) => (
              <div
                key={area}
                ref={(el) => (areaRefs.current[area] = el)}
                className={`area ${area}`}
                onDrop={(e) => handleDrop(e, area)}
                onDragOver={handleDragOver}
              />
            ))}
          </div>

          <div className="balls">
            {['verde', 'amarela', 'vermelha'].map((color) => (
              <div
                key={color}
                className={`ball ${color}`}
                draggable
                onDragStart={(e) => handleDragStart(e, color)}
                onTouchStart={(e) => handleTouchStart(e, color)}
              />
            ))}
          </div>
        </div>

        <div className="final-thoughts">
          <h2>Considerações Finais</h2>
          <p>
            O objetivo deste projeto é educar crianças sobre limites corporais, ensinando-as
            a identificar áreas de toque seguro e como reagir em situações desconfortáveis.
          </p>
          <p>
            Este projeto foi desenvolvido por estudantes de Medicina da
            <strong> Universidade Federal de Rondônia (UNIR)</strong>.
          </p>
          <p>
            Para mais informações ou contato, siga-nos no Instagram:
            <a href="https://instagram.com/semaforodotoque" target="_blank" rel="noopener noreferrer">
              @semaforodotoque
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toque;*/


import React, { useState, useRef, useEffect } from 'react';
import './Toque.css';

const initialAreasState = {
  cabecaDireita: null,
  cabecaEsquerda: null,
  bochechaDireita: null,
  bocaDireita: null,
  peitoEsquerdo: null,
  peitoDireito: null,
  cotovelo: null,
  maoDireita: null,
  genitalia: null,
  pernaEsquerdaSuperior: null,
  pernaEsquerdaInferior: null,
  pernaDireitaSuperior: null,
  pernaDireitaInferior: null,
  ombroEsquerdo: null,
  dorso: null,
  bunda: null,
};

const Toque = () => {
  const [areas, setAreas] = useState(initialAreasState);
  const [message, setMessage] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const areaRefs = useRef({});
  const totalAreas = Object.keys(initialAreasState).length;

  const correctBalls = {
    cabecaDireita: 'verde',
    cabecaEsquerda: 'verde',
    bochechaDireita: 'amarela',
    bochechaEsquerda: 'amarela',
    bocaDireita: 'vermelha',
    peitoEsquerdo: 'vermelha',
    peitoDireito: 'vermelha',
    cotovelo: 'verde',
    maoDireita: 'verde',
    genitalia: 'vermelha',
    pernaEsquerdaSuperior: 'amarela',
    pernaEsquerdaInferior: 'verde',
    pernaDireitaSuperior: 'amarela',
    pernaDireitaInferior: 'amarela',
    ombroEsquerdo: 'verde',
    dorso: 'verde',
    bunda: 'vermelha',
  };

  const dicas = {
    verde: 'Esta é uma região onde o toque costuma ser seguro.',
    amarela: 'Dica: Esta é uma região que ao ser tocada por outra pessoa precisamos ficar atentos. Se não se sentir confortável, não deve ser tocada.',
    vermelha: 'Dica: Esta é uma região privada. Ninguém deve tocá-la sem sua permissão.',
  };

  const handleDrop = (e, area) => {
    e.preventDefault();
    const bolaId = e.dataTransfer.getData('bola');
    const areaElement = areaRefs.current[area];

    if (correctBalls[area] === bolaId) {
      const newBall = document.createElement('div');
      newBall.className = `ball ${bolaId} fixed`;
      newBall.style.position = 'absolute';
      newBall.style.top = '50%';
      newBall.style.left = '50%';
      newBall.style.transform = 'translate(-50%, -50%)';
      newBall.style.width = '100%';
      newBall.style.height = '100%';
      areaElement.innerHTML = '';
      areaElement.appendChild(newBall);

      setMessage('');
      setAreas((prev) => ({ ...prev, [area]: bolaId }));
      setCorrectCount((prev) => prev + 1);
    } else {
      setMessage(dicas[correctBalls[area]]);
    }
  };

  const handleDragStart = (e, bolaId) => {
    e.dataTransfer?.setData('bola', bolaId);
  };

  const handleTouchStart = (e, bolaId) => {
    e.preventDefault();
    handleDragStart({ dataTransfer: { setData: () => {} } }, bolaId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resetGame = () => {
    setAreas(initialAreasState);
    setMessage('');
    setCorrectCount(0);

    // Limpar as bolinhas colocadas
    Object.values(areaRefs.current).forEach((area) => {
      area.innerHTML = '';
    });
  };

  useEffect(() => {
    if (correctCount === totalAreas) {
      setMessage('Parabéns! Você completou todas as áreas corretamente!');
    }
  }, [correctCount, totalAreas]);

  return (
    <div className="container">
      <header className="header">
        <h2 className="university-name">Semáforo do Toque</h2>
      </header>

      <div className="instructions">
        <p>Arraste as bolinhas para as partes do corpo corretas. Cada cor tem um significado:</p>
        <ul>
          <li><span className="ball verde"></span> Verde: Regiões seguras para o toque.</li>
          <li><span className="ball amarela"></span> Amarelo: Regiões para ficar atento.</li>
          <li><span className="ball vermelha"></span> Vermelho: Regiões que não devem ser tocadas sem permissão.</li>
        </ul>
        <p>Se você errar, receberá uma dica para aprender mais!</p>
      </div>

      <div className="content">
        <h1>Áreas do Corpo</h1>

        <p className="message-overlay">{message}</p>

        <div className="game-container">
          <div className="person">
            <img src="/crianca.png" alt="Criança" className="image" />
            {Object.keys(areas).map((area) => (
              <div
                key={area}
                ref={(el) => (areaRefs.current[area] = el)}
                className={`area ${area}`}
                onDrop={(e) => handleDrop(e, area)}
                onDragOver={handleDragOver}
              />
            ))}
          </div>

          <div className="balls">
            {['verde', 'amarela', 'vermelha'].map((color) => (
              <div
                key={color}
                className={`ball ${color}`}
                draggable
                onDragStart={(e) => handleDragStart(e, color)}
                onTouchStart={(e) => handleTouchStart(e, color)}
              />
            ))}
          </div>
        </div>

        <button className="reset-button" onClick={resetGame}>
          Apagar
        </button>

        <div className="final-thoughts">
          <h2>Considerações Finais</h2>
          <p>
            O objetivo deste projeto é educar crianças sobre limites corporais, ensinando-as
            a identificar áreas de toque seguro e como reagir em situações desconfortáveis.
          </p>
          <p>
            Este projeto foi desenvolvido por estudantes de Medicina da
            <strong> Universidade Federal de Rondônia (UNIR)</strong>.
          </p>
          <p>
            Para mais informações ou contato, siga-nos no Instagram:
            <a href="https://instagram.com/semaforodotoque" target="_blank" rel="noopener noreferrer">
              @semaforodotoque
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toque;
