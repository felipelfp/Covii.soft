import React from 'react';
import './ViverdeiaHero.css';

import heroImg from '../../assets/hero_3d_ai_abstract.png';

const ViverdeiaHero = () => {
  return (
    <section className="viverdeia-hero section">
      <div className="viverdeia-container hero-content">
        <div className="hero-text">
          <h1>A plataforma das empresas que crescem com Inteligência Artificial</h1>
          <p>Implementamos IA no seu negócio para escalar vendas, reduzir custos e otimizar processos operacionais com tecnologia de ponta.</p>
          <div className="hero-btns">
            <button className="viverdeia-btn-primary">Conhecer Soluções</button>
            <button className="viverdeia-btn-secondary">Falar com Especialista</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="AI 3D Illustration" />
        </div>
      </div>
    </section>
  );
};

export default ViverdeiaHero;
