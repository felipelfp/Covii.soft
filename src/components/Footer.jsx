import { useState } from 'react'
import Logo from './Logo'

const Footer = () => {
    const [showTerms, setShowTerms] = useState(false)

    return (
        <footer style={{ padding: '64px 10%', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'var(--slate-950)', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.6rem', color: 'white' }}>
                    <Logo size={40} />
                    <span>Covii<span style={{ color: 'var(--indigo-500)' }}>.soft</span></span>
                </div>
                
                {/* Informações de contato e direcionamentos */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px', maxWidth: '900px', margin: '16px 0 32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <h4 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Nossos Contatos</h4>
                        <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}>+55 (41) 98483-7391</a>
                        <a href="mailto:felipe.possa@coviisoft.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}>felipe.possa@coviisoft.com</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <h4 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Redes Sociais</h4>
                        <a href="https://linkedin.com/in/felipe-possa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}>LinkedIn</a>
                        <a href="https://www.instagram.com/covii.soft/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}>Instagram</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <h4 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Institucional</h4>
                        <button onClick={() => setShowTerms(true)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.92rem', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>Termos de Uso & LGPD</button>
                    </div>
                </div>
                
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
                    &copy; {new Date().getFullYear()} Covii.soft • Todos os direitos reservados
                </div>
            </div>

            {/* Modal de Termos de Uso & LGPD */}
            {showTerms && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(15, 23, 42, 0.82)',
                    backdropFilter: 'blur(14px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 20000,
                    padding: '24px'
                }}>
                    <div style={{
                        width: '740px',
                        maxWidth: '100%',
                        maxHeight: '82vh',
                        background: 'rgba(15, 23, 42, 0.96)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '36px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
                        overflowY: 'auto',
                        textAlign: 'left',
                        color: 'var(--slate-300)',
                        fontSize: '0.92rem',
                        lineHeight: 1.65
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h2 style={{ color: 'white', margin: 0, fontSize: '1.6rem', fontWeight: 700 }}>Termos de Uso & Privacidade (LGPD)</h2>
                            <button onClick={() => setShowTerms(false)} style={{
                                background: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                color: 'white',
                                padding: '10px 18px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.88rem'
                            }}>Fechar</button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p>Esta Política de Privacidade descreve como a <strong>Covii.soft</strong> coleta, armazena e utiliza as informações fornecidas pelos usuários em nosso site, em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018</strong>.</p>
                            
                            <h3 style={{ color: 'white', margin: '8px 0 2px', fontSize: '1.15rem' }}>1. Coleta e Uso de Dados Pessoais</h3>
                            <p>Os dados fornecidos em nosso chatbot (Nexus AI) e formulários de contato — incluindo nome completo, nome da empresa e informações de contato — são voluntariamente fornecidos para que possamos prestar atendimento sob medida, enviar propostas comerciais e dar retorno a dúvidas específicas.</p>
                            
                            <h3 style={{ color: 'white', margin: '8px 0 2px', fontSize: '1.15rem' }}>2. Segurança e Proteção da Informação</h3>
                            <p>Adotamos as melhores práticas técnicas e de segurança da informação para garantir a integridade dos seus dados pessoais contra acesso não autorizado, destruição, perda ou alteração acidental.</p>
                            
                            <h3 style={{ color: 'white', margin: '8px 0 2px', fontSize: '1.15rem' }}>3. Seus Direitos sob a LGPD</h3>
                            <p>De acordo com a legislação vigente, o titular dos dados possui pleno direito de solicitar confirmação de tratamento, acesso aos seus dados pessoais, correção de dados desatualizados e a eliminação definitiva dos mesmos de nossa base a qualquer momento.</p>

                            <h3 style={{ color: 'white', margin: '8px 0 2px', fontSize: '1.15rem' }}>4. Confidencialidade e Compartilhamento</h3>
                            <p>A Covii.soft não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais, exceto se houver sua expressa autorização ou para cumprimento de obrigações legais.</p>

                            <h3 style={{ color: 'white', margin: '8px 0 2px', fontSize: '1.15rem' }}>5. Contato Encarregado LGPD</h3>
                            <p>Para exercer seus direitos ou tirar dúvidas sobre privacidade, envie um e-mail para: <strong>felipe.possa@coviisoft.com</strong>.</p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}

export default Footer
