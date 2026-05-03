import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
    return (
        <section className="section" id="contato" style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px' }}>
                <div className="contact-info">
                    <span className="tag" style={{ marginBottom: '16px', display: 'inline-block' }}>Vamos Conversar</span>
                    <h2 className="section-title-contact" style={{ marginBottom: '24px' }}>Inicie sua Transformação</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
                        Pronto para automatizar seus processos e escalar sua operação com IA? Entre em contato para uma consultoria gratuita.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--indigo-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Mail size={20} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>E-mail</p>
                                <p style={{ fontWeight: 600, wordBreak: 'break-all' }}>felipe.possa@coviisoft.com</p>
                            </div>
                        </div>
                        <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--indigo-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Phone size={20} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>WhatsApp / Telefone</p>
                                <p style={{ fontWeight: 600 }}>+55 41 98483-7391</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="glass-card contact-form-card" style={{ padding: '32px' }}>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.currentTarget[0].value;
                            const email = e.currentTarget[1].value;
                            const subject = e.currentTarget[2].value;
                            const message = e.currentTarget[3].value;
                            const text = `Olá! Meu nome é ${name} (${email}). Gostaria de falar sobre: ${subject}. Mensagem: ${message}`;
                            window.open(`https://wa.me/5541984837391?text=${encodeURIComponent(text)}`, '_blank');
                        }} 
                        className="contact-form"
                    >
                        <div className="form-grid">
                            <input type="text" placeholder="Seu Nome" required />
                            <input type="email" placeholder="E-mail" required />
                        </div>
                        <input type="text" placeholder="Assunto (Ex: Automação n8n)" required />
                        <textarea placeholder="Como podemos ajudar no seu projeto?" required rows="4"></textarea>
                        <button type="submit" className="btn-primary">
                            <Send size={18} />
                            Enviar Mensagem via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
                .section-title-contact { font-size: 3rem; }
                .contact-form { display: flex; flex-direction: column; gap: 20px; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .contact-form input, .contact-form textarea {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 16px;
                    color: white;
                    outline: none;
                    width: 100%;
                    box-sizing: border-box;
                }
                .contact-form textarea { resize: none; }
                .contact-form .btn-primary { width: 100%; justify-content: center; }

                @media (max-width: 768px) {
                    .section-title-contact { font-size: 2.2rem; }
                    .form-grid { grid-template-columns: 1fr; }
                    .contact-form-card { padding: 24px !important; }
                }
            `}</style>
        </section>
    )
}

export default Contact
