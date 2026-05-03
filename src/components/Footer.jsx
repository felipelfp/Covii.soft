import Logo from './Logo'

const Footer = () => (
    <footer style={{ padding: '64px 10%', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'var(--slate-950)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.6rem', color: 'white' }}>
                <Logo size={40} />
                <span>Covii<span style={{ color: 'var(--indigo-500)' }}>.soft</span></span>
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
                <a href="https://linkedin.com/in/felipe-possa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn</a>
                <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>WhatsApp</a>
                <a href="mailto:felipe.possa@coviisoft.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Email</a>
            </div>
            
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
                &copy; {new Date().getFullYear()} Covii.soft • Todos os direitos reservados
            </div>
        </div>
    </footer>
)

export default Footer
