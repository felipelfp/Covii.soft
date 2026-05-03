import { motion } from 'framer-motion'
import { Server, Zap, Globe, Shield } from 'lucide-react'

const Skills = () => {
    const expertise = [
        { name: "fluxos com n8n & automação", level: 100 },
        { name: "IA & Modelos de Linguagem (LLM)", level: 95 },
        { name: "WhatsApp & Telegram API", level: 98 },
        { name: "Sistemas VoIP & Telefonia Cloud", level: 92 },
        { name: "Integração CRM & Dashboards", level: 94 }
    ]

    return (
        <section className="section" id="especialidades">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                    <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Especialidades</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Domínio Técnico para Modernização</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
                        Utilizamos as ferramentas mais poderosas do mercado para construir ecossistemas digitais autônomos e eficientes.
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.9rem' }}>TypeScript</span>
                        <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.9rem' }}>Python</span>
                        <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.9rem' }}>n8n</span>
                        <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.9rem' }}>PostgreSQL</span>
                        <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.9rem' }}>Docker</span>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '48px' }}>
                    {expertise.map((skill, i) => (
                        <div key={skill.name} style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                <span>{skill.name}</span>
                                <span style={{ color: 'var(--indigo-500)' }}>{skill.level}%</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    style={{ height: '100%', background: 'linear-gradient(to right, var(--indigo-600), var(--indigo-500))' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
