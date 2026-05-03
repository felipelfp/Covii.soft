import { motion } from 'framer-motion'
import { Award, Target, Eye } from 'lucide-react'

const About = () => {
    return (
        <section className="section" id="sobre">
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '32px' }}>
                    <div>
                        <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Nossa Identidade</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Inovação em Automação</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px', lineHeight: 1.8 }}>
                            A <strong>Covii.soft</strong> é uma boutique de tecnologia focada em elevar o patamar operacional de empresas através da <strong>Inteligência Artificial</strong>.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Nascemos com o propósito de transformar fluxos complexos em execuções impecáveis e automáticas, permitindo que nossos clientes foquem no que realmente importa: o crescimento do negócio.
                        </p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                        {[
                            { icon: <Target size={20} />, title: "Foco em Eficiência", text: "Projetamos sistemas que otimizam cada segundo do seu fluxo de trabalho." },
                            { icon: <Award size={20} />, title: "Tecnologia de Ponta", text: "Implementamos n8n, modelos de IA e infraestruturas robustas." },
                            { icon: <Eye size={20} />, title: "Transparência Total", text: "Monitoramento em tempo real de todas as automações e resultados." }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--indigo-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '4px' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
