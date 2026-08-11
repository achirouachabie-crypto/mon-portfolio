// src/components/footer.tsx
import { Heart } from 'lucide-react';
import '../css/footer.css';

export function Footer() {
  return (
    <footer id="contact" className="footer-section bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4 align-items-center">
          
          {/* Colonne 1 : Infos & Bio */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 className="fw-bold mb-2">Achirou Achabi</h5>
            <p className="text-muted small mb-0">
              Développeuse Fullstack React & TypeScript <br />
              Étudiante en BTS IDA - Admissible
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="col-lg-4 text-center">
            <ul className="list-unstyled d-flex justify-content-center gap-4 mb-0">
              <li><a href="#accueil" className="footer-link">Accueil</a></li>
              <li><a href="#parcours" className="footer-link">Parcours</a></li>
              <li><a href="#projet" className="footer-link">Projet</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux & Contact */}
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              
              {/* GitLab */}
              <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitLab">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 13.25-3.05-9.38a.56.56 0 0 0-1.06 0l-2.05 6.3H6.16l-2.05-6.3a.56.56 0 0 0-1.06 0L0 13.25l11.4 8.75z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              

              {/* Email */}
              <a href="mailto:ton-email@example.com" className="social-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        <hr className="my-4 border-secondary opacity-25" />

        {/* Bas de page / Copyright */}
        <div className="row align-items-center">
          <div className="col-md-12 text-center text-muted small">
            <p className="mb-0">
              © {new Date().getFullYear()} Achirou Achabi. Tous droits réservés. Fait avec <Heart size={14} className="text-danger mx-1" /> en React & TypeScript.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}