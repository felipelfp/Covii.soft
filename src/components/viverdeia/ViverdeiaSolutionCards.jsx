import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import './ViverdeiaSolutionCards.css';
import solutionsImg from '../../assets/solutions/saas_solution_mockup.png';
import mentorshipImg from '../../assets/solutions/ecommerce_solution_mockup.png';
import trainingImg from '../../assets/solutions/one_page_solution_mockup.png';
import communityImg from '../../assets/solutions/landing_page_solution_mockup.png';

const ViverdeiaSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sections = [
    {
      id: 'saas',
      title: 'SaaS',
      desc: 'Desenvolvimento de software como serviço sob medida para o seu negócio.',
      details: 'Criamos plataformas SaaS completas, escaláveis e seguras. Desde a arquitetura inicial até a integração com gateways de pagamento e painéis administrativos avançados.',
      features: ['Arquitetura Escalável', 'Painel Administrativo', 'Integração com Pagamentos', 'Alta Segurança'],
      image: solutionsImg,
      btn: 'Conhecer agora →',
      alt: false,
      progress: 0.12
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      desc: 'Lojas virtuais modernas, rápidas e focadas em converter visitantes em clientes.',
      details: 'Desenvolvemos e-commerces completos utilizando tecnologias de ponta. Design premium, carregamento instantâneo, carrinho otimizado e checkout sem fricção.',
      features: ['Design Premium', 'Carregamento Rápido', 'Checkout Otimizado', 'SEO Avançado'],
      image: mentorshipImg,
      btn: 'Conhecer agora →',
      alt: true,
      progress: 0.38
    },
    {
      id: 'onepage',
      title: 'One Pages',
      desc: 'Sites de página única sofisticados que apresentam seu negócio de forma direta e elegante.',
      details: 'Sites de página única ideais para apresentar produtos ou serviços com foco em conversão e experiência do usuário premium. Seções fluidas e design impactante.',
      features: ['Visual Impactante', 'Navegação Fluida', 'Alta Conversão', 'Responsividade Total'],
      image: trainingImg,
      btn: 'Conhecer agora →',
      alt: false,
      progress: 0.62
    },
    {
      id: 'landingpage',
      title: 'Landing Pages',
      desc: 'Páginas de vendas profissionais criadas para transformar cliques em clientes reais.',
      details: 'Criação de landing pages com copy persuasivo, design de alta conversão e carregamento ultra rápido para garantir o máximo retorno sobre seu investimento em anúncios.',
      features: ['Copy Persuasivo', 'Carregamento Ultra Rápido', 'Otimização de Leads', 'Integração com CRM'],
      image: communityImg,
      btn: 'Conhecer agora →',
      alt: true,
      progress: 0.88
    }
  ];

  return (
    <section className="viverdeia-solutions-section section" id="solucoes" ref={containerRef}>
      <div className="viverdeia-container" style={{ position: 'relative' }}>
        
        {/* Central Dynamic Progress Line */}
        <div className="viverdeia-progress-track">
          <motion.div 
            className="viverdeia-progress-fill"
            style={{ height: progressHeight }}
          />
          {sections.map((s, idx) => (
            <motion.div 
              key={`dot-${idx}`}
              className="viverdeia-progress-dot"
              style={{ 
                top: `${(idx * 25) + 12.5}%`,
                borderColor: useTransform(scrollYProgress, [s.progress - 0.1, s.progress], ['rgba(99, 102, 241, 0.2)', 'rgba(99, 102, 241, 1)']),
                backgroundColor: useTransform(scrollYProgress, [s.progress - 0.1, s.progress], ['#020617', 'rgba(99, 102, 241, 1)']),
                boxShadow: useTransform(scrollYProgress, [s.progress - 0.1, s.progress], ['0 0 0px transparent', '0 0 15px rgba(99, 102, 241, 0.5)'])
              }}
            />
          ))}
        </div>

        {sections.map((s, index) => (
          <div key={index} className={`solution-row ${s.alt ? 'row-reverse' : ''}`}>
            <div className="solution-info">
              <motion.div
                initial={{ opacity: 0, x: s.alt ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <button 
                  className="viverdeia-btn-outline"
                  onClick={() => setSelectedSolution(s)}
                >
                  {s.btn}
                </button>
              </motion.div>
            </div>
            <div className="solution-visual">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img src={s.image} alt={s.title} className="dashboard-img" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSolution && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="viverdeia-modal-overlay"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="viverdeia-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="viverdeia-modal-close"
                onClick={() => setSelectedSolution(null)}
              >
                <X size={24} />
              </button>
              
              <div className="viverdeia-modal-grid">
                <div className="viverdeia-modal-visual">
                  <img src={selectedSolution.image} alt={selectedSolution.title} />
                </div>
                <div className="viverdeia-modal-body">
                  <span className="viverdeia-badge">SOLUÇÃO EXCLUSIVA</span>
                  <h2>{selectedSolution.title}</h2>
                  <p className="viverdeia-modal-desc">{selectedSolution.details}</p>
                  
                  <div className="viverdeia-features-grid">
                    {selectedSolution.features.map(f => (
                      <div key={f} className="viverdeia-feature-item">
                        <CheckCircle2 size={18} className="viverdeia-icon-check" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="viverdeia-modal-footer">
                    <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" className="viverdeia-btn-primary" style={{ textDecoration: 'none', textAlign: 'center' }}>Começar Agora</a>
                    <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" className="viverdeia-btn-secondary" style={{ textDecoration: 'none', textAlign: 'center' }}>Falar com Consultor <ArrowRight size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .viverdeia-solutions-section {
            position: relative;
            padding: 100px 0;
        }
        
        .viverdeia-progress-track {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(-50%);
            z-index: 5;
        }

        .viverdeia-progress-fill {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: var(--indigo-500);
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }

        .viverdeia-progress-dot {
            position: absolute;
            left: 50%;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid rgba(99, 102, 241, 0.2);
            background: #020617;
            transform: translate(-50%, -50%);
            z-index: 6;
            transition: all 0.3s ease;
        }

        .viverdeia-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .viverdeia-modal-content {
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--slate-900);
          border: 1px solid var(--glass-border);
          border-radius: 32px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .viverdeia-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: white;
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          z-index: 10;
          display: flex;
          transition: all 0.3s;
        }

        .viverdeia-modal-close:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: rotate(90deg);
        }

        .viverdeia-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }

        .viverdeia-modal-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          min-height: 400px;
        }

        .viverdeia-modal-body {
          padding: 60px 50px;
        }

        .viverdeia-modal-desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .viverdeia-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        .viverdeia-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .viverdeia-icon-check {
          color: var(--indigo-500);
        }

        .viverdeia-modal-footer {
          display: flex;
          gap: 16px;
        }

        .viverdeia-modal-body h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: white;
        }

        @media (max-width: 992px) {
          .viverdeia-modal-grid { grid-template-columns: 1fr; }
          .viverdeia-features-grid { grid-template-columns: 1fr; }
          .viverdeia-modal-footer { flex-direction: column; }
          .viverdeia-progress-track { display: none; }
        }
      `}</style>
    </section>
  );
};

export default ViverdeiaSolutions;
