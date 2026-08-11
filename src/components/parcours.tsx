// src/components/parcours.tsx

export function Parcours() {
  return (
    <section id="parcours" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Mon Parcours</h2>
        <p className="text-muted">Formations, diplômes et expériences professionnelles</p>
      </div>

      <div className="row">
        
        {/* Colonne Expérience Professionnelle */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body p-4">
              <h3 className="h4 text-primary mb-4">
                <i className="bi bi-briefcase me-2"></i> Expérience Professionnelle
              </h3>

              <div className="border-start border-primary border-3 ps-3 ms-2">
                <span className="badge bg-secondary mb-2">15/11/2025 - 02/03/2026</span>
                <h4 className="h5 fw-bold">Stagiaire Informatique & Support</h4>
                <p className="text-muted mb-2">
                  LNSP : Laboratoire National de la Santé Publique <br />
                  <small>Abidjan - Bd de Marseille</small>
                </p>
                <ul className="mb-0 text-secondary ps-3">
                  <li>Développement d'applications web (React, Vite, TypeScript) pour la gestion de stock et des analyses.</li>
                  <li>Support et assistance bureautique (MS Office).</li>
                  <li>Administration : Gestion documentaire (scan, impression, suivi).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Formations & Diplômes */}
        <div className="col-lg-6">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body p-4">
              <h3 className="h4 text-primary mb-4">
                <i className="bi bi-mortarboard me-2"></i> Formations & Diplômes
              </h3>

              {/* BTS */}
              <div className="border-start border-primary border-3 ps-3 ms-2 mb-4">
                <span className="badge bg-primary mb-2">2025</span>
                <h4 className="h5 fw-bold">Brevet de Technicien Supérieur (BTS)</h4>
                <p className="text-muted mb-1">
                  Informatique Développeur d'Application (IDA) <br />
                  <small>Université Loko ISFOP, Abidjan</small>
                </p>
                <p className="fw-semibold text-dark mb-0">Statut : Admissible (Soutenance en cours de préparation)</p>
              </div>

              {/* Baccalauréat */}
              <div className="border-start border-secondary border-3 ps-3 ms-2">
                <span className="badge bg-secondary mb-2">2023</span>
                <h4 className="h5 fw-bold">Baccalauréat (Série D)</h4>
                <p className="text-muted mb-1">
                  Collège Voltaire Marcory, Abidjan
                </p>
                <p className="fw-semibold text-success mb-0">Résultat : Diplôme obtenu</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}