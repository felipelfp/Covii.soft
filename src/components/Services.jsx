import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, MessageSquare, Phone, Database, Workflow, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const services = [
    {
        title: "Automação com n8n",
        desc: "Fluxos de trabalho inteligentes que conectam todas as suas ferramentas e eliminam tarefas repetitivas. Desenvolvemos integrações complexas que economizam centenas de horas manuais.",
        icon: <Workflow className="service-icon" />,
        tags: ["n8n", "Webhooks", "APIs"],
        color: "#6366f1"
    },
    {
        title: "Chatbots IA (WhatsApp/TG)",
        desc: "Atendimento 24/7 com inteligência artificial para converter leads e suporte automático. Treinamos modelos de linguagem específicos para o seu negócio.",
        icon: <MessageSquare className="service-icon" />,
        tags: ["GPT-4", "WhatsApp", "Telegram"],
        color: "#8b5cf6"
    },
    {
        title: "URAs & Sistemas VoIP",
        desc: "Centrais telefônicas inteligentes com reconhecimento de voz e fluxos de atendimento personalizados. Automatize o primeiro contato telefônico com precisão.",
        icon: <Phone className="service-icon" />,
        tags: ["VoIP", "URA", "PABX Cloud"],
        color: "#3b82f6"
    },
    {
        title: "Integração CRM & Dados",
        desc: "Sincronização em tempo real de contatos, vendas e processos diretamente no seu CRM. Dashboards personalizados para visualização de métricas em tempo real.",
        icon: <Database className="service-icon" />,
        tags: ["CRM", "SQL", "Sync"],
        color: "#06b6d4"
    }
]

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [direction, setDirection] = useState(0)
    const timerRef = useRef()

    const nextService = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % services.length)
    }, [])

    const prevService = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    }, [])

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(nextService, 5000)
        }
        return () => clearInterval(timerRef.current)
    }, [isPaused, nextService])

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    }

    return (
        <section className="section" id="servicos">
            <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ textAlign: 'left' }}>
                    <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>O que fazemos</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '8px' }}>Soluções de Alta Performance</h2>
                </div>
                
                <div className="carousel-nav" style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={prevService} className="nav-btn-mini"><ChevronLeft size={20} /></button>
                    <button onClick={nextService} className="nav-btn-mini"><ChevronRight size={20} /></button>
                </div>
            </div>

            <div className="services-carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <div className="glass-card" style={{ height: '100%', display: 'flex', gap: '32px', alignItems: 'center', padding: '32px' }}>
                            <div style={{ 
                                width: '100px', 
                                height: '100px', 
                                borderRadius: '20px', 
                                background: 'rgba(255,255,255,0.03)', 
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: services[currentIndex].color,
                                flexShrink: 0
                            }}>
                                {services[currentIndex].icon}
                            </div>
                            
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{services[currentIndex].title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1rem', lineHeight: '1.5', maxWidth: '800px' }}>
                                    {services[currentIndex].desc}
                                </p>
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {services[currentIndex].tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--indigo-400)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
                                        Saiba Mais <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
                {services.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                        style={{ 
                            width: i === currentIndex ? '24px' : '8px', 
                            height: '8px', 
                            borderRadius: '4px', 
                            background: i === currentIndex ? 'var(--indigo-500)' : 'rgba(255,255,255,0.1)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ))}
            </div>

            <style>{`
                .service-icon { width: 50px; height: 50px; }
                .nav-btn-mini {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--glass-border);
                    color: white;
                    padding: 8px;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .nav-btn-mini:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: var(--indigo-500);
                    color: var(--indigo-400);
                }
                .services-carousel-container {
                    position: relative;
                    height: 320px;
                    overflow: hidden;
                }
                @media (max-width: 768px) {
                    .services-carousel-container {
                        height: auto;
                        min-height: 500px;
                    }
                    .glass-card { 
                        flex-direction: column !important; 
                        text-align: center !important; 
                        padding: 24px !important;
                        gap: 20px !important;
                        height: auto !important;
                    }
                    .glass-card > div:last-child {
                        width: 100%;
                    }
                    .carousel-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Services
