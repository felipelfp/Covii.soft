import React from 'react';
import { 
  Globe, 
  Zap, 
  Cpu, 
  Atom, 
  Code, 
  Terminal, 
  Database, 
  FileCode, 
  Layout, 
  Palette 
} from 'lucide-react';
import './ViverdeiaTrustWall.css';

const ViverdeiaTrustWall = () => {
  const techStack = [
    { name: 'Landing Pages', icon: <Globe size={20} /> },
    { name: 'n8n', icon: <Zap size={20} /> },
    { name: 'IA', icon: <Cpu size={20} /> },
    { name: 'React', icon: <Atom size={20} /> },
    { name: 'Angular', icon: <Code size={20} /> },
    { name: 'C#', icon: <Terminal size={20} /> },
    { name: 'PHP', icon: <Database size={20} /> },
    { name: 'JS', icon: <FileCode size={20} /> },
    { name: 'HTML', icon: <Layout size={20} /> },
    { name: 'CSS', icon: <Palette size={20} /> }
  ];
  
  return (
    <section className="viverdeia-trust-wall section">
      <div className="viverdeia-container">
        <p className="trust-label">POTENCIALIZANDO O CRESCIMENTO COM AS MELHORES TECNOLOGIAS</p>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViverdeiaTrustWall;
