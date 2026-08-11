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
              
              {/* GitHub */}
              <a href="https://github.com/achirouachabie-crypto/mon-portfolio" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:achirouachabie@gmail.com" className="social-icon" aria-label="Email">
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