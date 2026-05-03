import React from 'react';
import './ViverdeiaFooter.css';

const ViverdeiaFooter = () => {
  return (
    <footer className="viverdeia-footer">
      <div className="viverdeia-container footer-content">
        <div className="footer-brand">
          <span className="logo-text">Covii.<b>soft</b></span>
          <p>A maior plataforma de implementação de IA para empresas do Brasil.</p>
        </div>
        <div className="footer-links">
          <div className="links-col">
            <h4>Produto</h4>
            <a href="#">Soluções</a>
            <a href="#">Cases</a>
            <a href="#">Planos</a>
          </div>
          <div className="links-col">
            <h4>Empresa</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Carreiras</a>
            <a href="#">Blog</a>
          </div>
          <div className="links-col">
            <h4>Legal</h4>
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="viverdeia-container">
          <p>&copy; 2026 Covii.soft. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default ViverdeiaFooter;
