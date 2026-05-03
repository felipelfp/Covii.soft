import { motion } from 'framer-motion'
import { Award, Target, Eye } from 'lucide-react'

const About = () => {
    return (
        <section className="section" id="sobre">
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '32px' }}>
                    <div>
                        <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Nossa Identidade</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Soluções Digitais Completas</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px', lineHeight: 1.8 }}>
                            A <strong>Covii.soft</strong> é uma empresa especializada em criar sistemas sob medida e soluções digitais completas para empresas, abrangendo desde o desenvolvimento web até integrações inteligentes e tecnologia de ponta.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Trabalhamos para transformar as necessidades do seu negócio em plataformas digitais modernas, eficientes e escaláveis, elevando a sua presença no mercado e acelerando o seu crescimento.
                        </p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                        {[
                            { icon: <Target size={20} />, title: "Sistemas & SaaS", text: "Projetamos softwares exclusivos, web e mobile, para impulsionar a sua operação." },
                            { icon: <Award size={20} />, title: "Soluções de Ponta", text: "Desenvolvimento avançado com Angular, C#, PHP, Branding e Inteligência Artificial." },
                            { icon: <Eye size={20} />, title: "Design & Identidade", text: "Branding e interfaces profissionais com foco em experiência de usuário e conversão." }
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
