import React from 'react'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Wrench, Rocket } from 'lucide-react'

const steps = [
    {
        title: 'Diagnóstico',
        desc: 'Análise profunda dos seus gargalos operacionais.',
        icon: <Search size={24} />,
        color: '#6366f1'
    },
    {
        title: 'Estratégia',
        desc: 'Desenho da arquitetura de IA personalizada.',
        icon: <Lightbulb size={24} />,
        color: '#8b5cf6'
    },
    {
        title: 'Implementação',
        desc: 'Codificação e integração dos agentes e fluxos.',
        icon: <Wrench size={24} />,
        color: '#a855f7'
    },
    {
        title: 'Escala',
        desc: 'Monitoramento e expansão dos resultados.',
        icon: <Rocket size={24} />,
        color: '#d946ef'
    }
]

const InnovationJourney = () => {
    return (
        <section className="section" id="jornada" style={{ overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Nosso Processo</span>
                <h2 style={{ fontSize: '3rem' }}>Jornada de Transformação</h2>
            </div>

            <div style={{ position: 'relative', padding: '40px 0' }}>
                {/* Horizontal Line Background */}
                <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '0', 
                    width: '100%', 
                    height: '2px', 
                    background: 'linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
                    zIndex: 0
                }}></div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '20px', 
                    position: 'relative', 
                    zIndex: 1 
                }}>
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            {/* The Dot/Point */}
                            <motion.div 
                                whileHover={{ scale: 1.2 }}
                                style={{ 
                                    width: '64px', 
                                    height: '64px', 
                                    borderRadius: '50%', 
                                    background: 'var(--slate-900)', 
                                    border: `2px solid ${step.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justify-content: 'center',
                                    color: step.color,
                                    boxShadow: `0 0 20px ${step.color}44`,
                                    marginBottom: '24px',
                                    cursor: 'pointer'
                                }}
                            >
                                {step.icon}
                            </motion.div>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '180px' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InnovationJourney
