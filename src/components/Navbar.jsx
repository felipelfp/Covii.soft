import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Outfit'", fontWeight: 800, fontSize: '1.4rem', color: 'white' }}>
                    <Logo size={32} />
                    <span>Covii<span style={{ color: 'var(--indigo-500)' }}>.soft</span></span>
                </div>
                
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                    <li><a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Foco</a></li>
                    <li><a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a></li>
                    <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfólio</a></li>
                    <li><a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
                    <li className="mobile-only">
                        <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
                    </li>
                </ul>

                <div className="nav-cta desktop-only">
                    <a href="https://wa.me/5541984837391" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Fale Conosco</a>
                </div>

                <button className="mobile-toggle" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
                </button>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 10000;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .nav-container {
                    padding: 24px 10%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
                .navbar.scrolled .nav-container {
                    padding: 16px 10%;
                }
                .navbar.scrolled {
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid var(--glass-border);
                }
                .nav-links {
                    display: flex;
                    gap: 32px;
                    list-style: none;
                }
                .nav-links a {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                .nav-links a:hover {
                    color: #fff;
                }
                .mobile-toggle {
                    display: none;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }
                .mobile-only { display: none; }

                @media (max-width: 968px) {
                    .nav-container { padding: 20px 5% !important; }
                    .mobile-toggle { display: block; }
                    .desktop-only { display: none; }
                    .mobile-only { display: block; }
                    
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100vh;
                        background: var(--slate-900);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 40px;
                        transition: 0.4s;
                        box-shadow: -10px 0 30px rgba(0,0,0,0.5);
                        z-index: 999;
                    }
                    .nav-links.active {
                        right: 0;
                    }
                    .nav-links a {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </nav>
    )
}

export default Navbar
