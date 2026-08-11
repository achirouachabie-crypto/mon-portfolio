// src/components/accueil.tsx
import { Code, Users, Download, ArrowRight, Sparkles } from 'lucide-react';
import '../css/accueil.css';
import profileImage from '../assets/photo-pro.png'; // Remplace par le chemin réel de ton image
import cvPdf from '../fichier/cv parfait.pdf'; // Import correct du PDF depuis le src

export function Accueil() {
    const hardSkills = ['React', 'TypeScript', 'MongoDB', 'HTML5', 'CSS3'];
    const softSkills = ['Travail en équipe', 'Rigueur', 'Adaptabilité', 'Curiosité technique'];

    return (
        <section id="accueil" className="accueil-section">
            <div className="container py-5">
                <div className="row align-items-center min-vh-75">

                    {/* Colonne de gauche : Texte de présentation et compétences */}
                    <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
                        <div className="badge-wrapper mb-3">
                            <span className="badge badge-custom px-3 py-2 fs-6">
                                <Sparkles size={16} className="me-2" />
                                Développeur Fullstack (React & TypeScript)
                            </span>
                        </div>

                        <h1 className="display-4 fw-bold mb-3 title-main">
                            Bonjour, je suis <span className="text-gradient">Achirou Achabi</span>
                        </h1>

                        <p className="lead text-muted mb-4">
                            Étudiante en Informatique Développeuse d'Application (BTS IDA) et admissible.
                            Dotée d'une expérience concrète en développement web moderne acquise lors de mon stage au
                            <strong className="text-dark"> LNSP (Laboratoire National de la Santé Publique)</strong>.
                        </p>

                        {/* Section Hard Skills */}
                        <div className="skills-group mb-3">
                            <h6 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                <Code size={18} className="text-primary" /> Hard Skills :
                            </h6>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                                {hardSkills.map((skill, index) => (
                                    <span key={index} className="badge hard-skill-badge px-3 py-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Section Soft Skills */}
                        <div className="skills-group mb-4">
                            <h6 className="fw-bold text-dark mb-2 d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                <Users size={18} className="text-success" /> Soft Skills :
                            </h6>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                                {softSkills.map((skill, index) => (
                                    <span key={index} className="badge soft-skill-badge px-3 py-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Boutons d'action */}
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                            <a href="#projet" className="btn btn-primary btn-lg px-4 d-flex align-items-center gap-2 shadow-sm">
                                Voir mes projets <ArrowRight size={18} />
                            </a>
                            <a
                                href={cvPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark btn-lg px-4 d-flex align-items-center gap-2"
                            >
                                <Download size={18} /> Télécharger mon CV
                            </a>
                        </div>
                    </div>

                    {/* Colonne de droite : Avatar stylisé */}
                    <div className="col-lg-5 text-center">
                        <div className="hero-avatar-container">
                            <div className="hero-avatar-circle shadow-lg overflow-hidden p-0">
                                <img
                                    src={profileImage}
                                    alt="Achirou Achabi"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}