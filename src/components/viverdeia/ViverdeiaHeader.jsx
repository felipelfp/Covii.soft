import React from 'react';
import './ViverdeiaHeader.css';

const ViverdeiaHeader = () => {
  return (
    <header className="viverdeia-header">
      <div className="viverdeia-container header-content">
        <div className="logo">
          <span className="logo-text">Covii.<b>soft</b></span>
        </div>
        <nav className="viverdeia-nav">
          <a href="#solucoes">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#planos">Planos</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="header-actions">
          <a href="/login" className="login-link">Login</a>
          <button className="viverdeia-btn-primary">Conhecer agora</button>
        </div>
      </div>
    </header>
  );
};

export default ViverdeiaHeader;
