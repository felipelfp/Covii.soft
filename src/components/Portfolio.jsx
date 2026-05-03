import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, X, CheckCircle2 } from 'lucide-react'

const projects = [
    {
        title: "Nexus AI Chatbot",
        category: "Chat & Automação",
        desc: "Sistema de atendimento inteligente para imobiliárias integrando WhatsApp e CRM via n8n.",
        details: "Este projeto foi criado para revolucionar o atendimento no setor imobiliário. Implementamos um fluxo de IA que conversa via WhatsApp, entende as preferências de imóveis do cliente, filtra por faixa de preço e localização, e já agenda a visita sem intervenção humana. Tudo integrado ao CRM central.",
        features: ["Qualificação de Leads 24/7", "Integração com WhatsApp Oficial", "IA com Memória de Contexto", "Painel de Métricas Avançado"],
        image: "/projects/nexus_ai_chatbot.png",
        tags: ["WhatsApp API", "n8n", "OpenAI"],
        link: "#"
    },
    {
        title: "Landing Page de Alta Conversão",
        category: "Landing Page",
        desc: "Design focado em conversão e performance para lançamentos de produtos digitais.",
        image: "/projects/landing_page.png",
        details: "Landing page desenvolvida com foco total em taxa de conversão (CRO). Estrutura otimizada para SEO, carregamento instantâneo via CDN e design persuasivo baseado em gatilhos mentais. Ideal para infoprodutos e serviços de ticket alto.",
        features: ["Carregamento Ultra-Rápido", "Copywriting Persuasivo", "Design Responsivo", "Testes A/B Integrados"],
        tags: ["React", "CSS3", "SEO"],
        link: "#"
    },
    {
        title: "E-commerce Premium",
        category: "E-commerce",
        desc: "Loja virtual completa com sistema de pagamentos, gestão de estoque e checkout otimizado.",
        image: "/projects/ecommerce.png",
        details: "Plataforma de e-commerce robusta e escalável. Conta com busca inteligente, filtros complexos de produtos, carrinho persistente e checkout transparente com 1 clique (Stripe). Foco em User Experience para maximizar o LTV.",
        features: ["Checkout de 1 Clique", "Gestão de Inventário Real-Time", "Mobile First Design", "Integração Logística Automática"],
        tags: ["Next.js", "Stripe", "Node.js"],
        link: "#"
    },
    {
        title: "TaskMaster SaaS",
        category: "Sistemas SaaS",
        desc: "Sistema de gestão empresarial por assinatura com múltiplos níveis de acesso e dashboards.",
        image: "/projects/saas_system.png",
        details: "Software as a Service (SaaS) completo para gerenciamento de tarefas e projetos corporativos. Inclui Kanban dinâmico, Gantt, relatórios de produtividade por colaborador e faturamento recorrente via API.",
        features: ["Multi-Tenant Architecture", "Dashboards em Tempo Real", "Recorrência Automática", "App Mobile Integrado"],
        tags: ["React", "PostgreSQL", "Auth0"],
        link: "#"
    }
]

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [direction, setDirection] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const timerRef = useRef()

    const nextProject = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, [])

    const prevProject = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }, [])

    useEffect(() => {
        if (!isPaused && !selectedProject) {
            timerRef.current = setInterval(nextProject, 5000)
        }
        return () => clearInterval(timerRef.current)
    }, [isPaused, nextProject, selectedProject])

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    return (
        <section className="section" id="portfolio">
            <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ textAlign: 'left' }}>
                    <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Nosso Portfólio</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '8px' }}>Projetos de Impacto</h2>
                </div>
                
                <div className="carousel-nav" style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
                    <button onClick={prevProject} className="nav-btn"><ChevronLeft size={24} /></button>
                    <button onClick={nextProject} className="nav-btn"><ChevronRight size={24} /></button>
                </div>
            </div>

            <div 
                className="portfolio-carousel-container"
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
                        <div className="portfolio-card glass-card">
                            <div className="portfolio-image-wrapper">
                                <img 
                                    src={projects[currentIndex].image} 
                                    alt={projects[currentIndex].title} 
                                    className="portfolio-image"
                                />
                                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                                    <span style={{ padding: '6px 12px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--indigo-400)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        {projects[currentIndex].category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="portfolio-info">
                                <h3 className="portfolio-title">{projects[currentIndex].title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1rem', lineHeight: '1.5' }}>
                                    {projects[currentIndex].desc}
                                </p>
                                
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                    {projects[currentIndex].tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <button 
                                    onClick={() => setSelectedProject(projects[currentIndex])}
                                    className="btn-primary" 
                                    style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 24px', fontSize: '0.9rem' }}
                                >
                                    Ver Detalhes do Projeto <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
                {projects.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                        style={{ 
                            width: i === currentIndex ? '32px' : '12px', 
                            height: '12px', 
                            borderRadius: '6px', 
                            background: i === currentIndex ? 'var(--indigo-500)' : 'rgba(255,255,255,0.1)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ 
                            position: 'fixed', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%', 
                            background: 'rgba(2, 6, 23, 0.9)', 
                            backdropFilter: 'blur(12px)', 
                            zIndex: 10000, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            padding: '20px' 
                        }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 30, opacity: 0 }}
                            style={{ 
                                width: '100%', 
                                maxWidth: '1000px', 
                                maxHeight: '90vh', 
                                overflowY: 'auto', 
                                background: 'var(--slate-900)', 
                                border: '1px solid var(--glass-border)', 
                                borderRadius: '32px', 
                                padding: '0', 
                                position: 'relative',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '50%', zIndex: 10, display: 'flex' }}
                            >
                                <X size={24} />
                            </button>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                                <div style={{ height: '100%', minHeight: '400px' }}>
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '60px 40px' }}>
                                    <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{selectedProject.category}</span>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>{selectedProject.title}</h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7' }}>
                                        {selectedProject.details}
                                    </p>
                                    
                                    <div style={{ marginBottom: '40px' }}>
                                        <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>O que implementamos:</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                            {selectedProject.features.map(feature => (
                                                <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                                    <CheckCircle2 size={18} style={{ color: 'var(--indigo-500)' }} />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <a 
                                            href={`https://wa.me/5541984837391?text=Olá! Gostaria de falar sobre o projeto: ${selectedProject.title}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary" 
                                            style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
                                        >
                                            Falar sobre este Projeto
                                        </a>
                                        <button onClick={() => setSelectedProject(null)} className="nav-btn" style={{ padding: '14px 20px' }}>
                                             Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .nav-btn {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 12px;
                    border-radius: 12px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .nav-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--indigo-500);
                    color: var(--indigo-400);
                    transform: translateY(-2px);
                }
                .portfolio-card {
                    padding: 0;
                    overflow: hidden;
                    height: 100%;
                    display: grid;
                    grid-template-columns: minmax(400px, 1.2fr) 1fr;
                }
                .portfolio-image-wrapper {
                    overflow: hidden;
                    position: relative;
                }
                .portfolio-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .portfolio-info {
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .portfolio-carousel-container {
                    position: relative;
                    height: 520px;
                    overflow: hidden;
                }
                .portfolio-title {
                    font-size: 1.8rem;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }
                @media (max-width: 968px) {
                    .portfolio-card { grid-template-columns: 1fr; }
                    .portfolio-carousel-container { height: auto !important; min-height: 600px; }
                    .portfolio-image-wrapper { height: 300px; }
                    .portfolio-title { font-size: 1.5rem; }
                    .portfolio-info { padding: 24px; align-items: center; text-align: center; }
                    .carousel-nav { display: none !important; }
                }
            `}</style>
        </section>
    )
}

export default Portfolio
