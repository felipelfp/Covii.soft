import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Zap, Globe, Layout, Database } from 'lucide-react'

const ads = [
    {
        badge: "Líder em Automação com IA",
        badgeIcon: <Bot size={16} />,
        title: "Automatize sua empresa com Inteligência Artificial.",
        description: "Especialistas em automações complexas com n8n, sistemas de chat inteligentes e URAs de alta performance.",
        cta: "Solicitar Consultoria",
        icon: <Bot size={24} />
    },
    {
        badge: "Performance & Conversão",
        badgeIcon: <Layout size={16} />,
        title: "Landing Pages e Sites de Altíssima Conversão.",
        description: "Desenvolvemos sua presença digital com foco total em SEO, velocidade e design premium para atrair mais clientes.",
        cta: "Explorar Portfólio",
        icon: <Globe size={24} />
    },
    {
        badge: "Escalabilidade & Gestão",
        badgeIcon: <Database size={16} />,
        title: "Integração Total de CRM, VoIP e Sistemas.",
        description: "Conecte todas as suas ferramentas e tenha o controle total da sua operação em um dashboard único e inteligente.",
        cta: "Saber Mais",
        icon: <Zap size={24} />
    }
]

const Hero = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % ads.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <div className="hero-badge">
                            {ads[index].badgeIcon}
                            {ads[index].badge}
                        </div>
                        
                        <h1 className="hero-title gradient-text">
                            {ads[index].title}
                        </h1>

                        <p className="hero-description">
                            {ads[index].description}
                        </p>

                        <div className="hero-actions">
                            <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <Zap size={20} />
                                {ads[index].cta}
                            </a>
                            <a href="#servicos" className="btn-outline-glow">
                                Explorar Soluções
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="hero-dots">
                {ads.map((_, i) => (
                    <div 
                        key={i} 
                        className={`hero-dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>

            <style>{`
                .hero { 
                    min-height: 100vh; 
                    display: flex; 
                    align-items: center; 
                    padding: 0 10%; 
                    position: relative;
                    overflow: hidden;
                }
                .hero-content {
                    max-width: 900px;
                    z-index: 2;
                }
                .hero-badge {
                    display: inline-flex; 
                    align-items: center; 
                    gap: 8px; 
                    background: rgba(99, 102, 241, 0.1); 
                    color: var(--indigo-500); 
                    padding: 8px 18px; 
                    border-radius: 100px; 
                    font-size: 0.85rem; 
                    font-weight: 600; 
                    border: 1px solid rgba(99, 102, 241, 0.2); 
                    margin-bottom: 24px;
                    width: fit-content;
                }
                .hero-title {
                    font-size: clamp(2.2rem, 7vw, 4.5rem); 
                    line-height: 1.1; 
                    font-weight: 800; 
                    margin-bottom: 24px;
                    min-height: 2.2em; /* Prevent layout jump */
                    display: flex;
                    align-items: center;
                }
                .hero-description {
                    font-size: 1.2rem; 
                    color: var(--text-secondary); 
                    max-width: 650px; 
                    margin-bottom: 40px;
                    line-height: 1.6;
                    min-height: 3.2em;
                }
                .hero-actions {
                    display: flex; 
                    gap: 16px; 
                    flex-wrap: wrap;
                }
                .btn-outline-glow {
                    display: inline-flex; 
                    align-items: center; 
                    padding: 14px 32px; 
                    color: white; 
                    text-decoration: none; 
                    font-weight: 600; 
                    border-bottom: 2px solid var(--indigo-500);
                    transition: all 0.3s;
                }
                .btn-outline-glow:hover {
                    background: rgba(99, 102, 241, 0.05);
                    border-bottom-width: 4px;
                }
                
                .hero-dots {
                    position: absolute;
                    bottom: 40px;
                    left: 10%;
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }
                .hero-dot {
                    width: 40px;
                    height: 4px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 2px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .hero-dot.active {
                    background: var(--indigo-500);
                    width: 60px;
                }

                @media (max-width: 768px) {
                    .hero { padding: 120px 5% 60px; text-align: center; justify-content: center; min-height: auto; }
                    .hero-content { display: flex; flex-direction: column; align-items: center; }
                    .hero-title { min-height: auto; margin-bottom: 16px; text-align: center; }
                    .hero-description { min-height: auto; margin-bottom: 32px; font-size: 1rem; }
                    .hero-badge { margin: 0 auto 24px; }
                    .hero-dots { left: 50%; transform: translateX(-50%); bottom: 20px; }
                    .hero-actions { width: 100%; flex-direction: column; }
                    .btn-primary, .btn-outline-glow { width: 100%; justify-content: center; }
                }
            `}</style>
        </section>
    )
}

export default Hero
