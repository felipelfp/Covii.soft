import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Cpu } from 'lucide-react'

const metrics = [
    {
        title: "Redução de Custos",
        value: "40%",
        desc: "Média de redução em custos operacionais através de automação inteligente.",
        icon: <TrendingUp size={24} />,
        color: "#6366f1"
    },
    {
        title: "Tempo Economizado",
        value: "500h",
        desc: "Horas mensais recuperadas para ações estratégicas por nossos clientes.",
        icon: <Clock size={24} />,
        color: "#8b5cf6"
    },
    {
        title: "Escalabilidade",
        value: "Infinite",
        desc: "Sistemas desenhados para suportar o crescimento sem aumentar o overhead.",
        icon: <Cpu size={24} />,
        color: "#3b82f6"
    }
]

const Experience = () => {
    return (
        <section className="section" id="experiencia">
            <div style={{ marginBottom: '64px', textAlign: 'center' }}>
                <span className="tag">Resultados Mensuráveis</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '16px' }}>Impacto Tecnológico Real</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {metrics.map((metric, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', color: metric.color, marginBottom: '24px' }}>
                            {metric.icon}
                        </div>
                        <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '8px' }} className="gradient-text">{metric.value}</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{metric.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{metric.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
