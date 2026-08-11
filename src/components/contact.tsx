// src/components/contact.tsx
import { useState } from 'react';
import '../css/contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // ⚠️ Remplace "YOUR_FORM_ID" par l'identifiant fourni par Formspree
      const response = await fetch("https://formspree.io/f/mbgroyoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container py-5 contact-section">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contactez-moi</h2>
        <p className="text-muted">Une opportunité, un stage ou un projet ? N'hésitez pas à m'écrire.</p>
      </div>

      <div className="row g-5">
        
        {/* Informations de contact */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 h-100 p-4 bg-light">
            <h3 className="h4 fw-bold mb-4 text-primary">Mes Coordonnées</h3>
            
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                <span>✉️</span>
              </div>
              <div>
                <span className="d-block text-muted small">Email</span>
                <a href="mailto:achirouachabie@gmail.com" className="text-dark fw-semibold text-decoration-none">
                  achirouachabie@gmail.com
                </a>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                <span>📍</span>
              </div>
              <div>
                <span className="d-block text-muted small">Localisation</span>
                <span className="text-dark fw-semibold">
                  Abidjan - Koumassi-Remblais
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="bg-primary text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                <span>📞</span>
              </div>
              <div>
                <span className="d-block text-muted small">Téléphone</span>
                <a href="tel:0102539474" className="text-dark fw-semibold text-decoration-none">
                  0102539474
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4">
            {submitted ? (
              <div className="alert alert-success text-center py-5">
                <h4 className="fw-bold">Merci pour votre message !</h4>
                <p className="mb-0">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger py-2 mb-3 small" role="alert">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="nom" className="form-label fw-semibold">Votre Nom</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nom" 
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required 
                    placeholder="Ex: Jean Dupont"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Votre Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Ex: jean@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">Votre Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="Écrivez votre message ici..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2 fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}