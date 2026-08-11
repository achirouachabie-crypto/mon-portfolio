// src/components/projet.tsx
import { Carousel } from 'react-bootstrap';
import { ShieldCheck } from 'lucide-react'; // Icône de sécurité/confidentialité
import '../css/projet.css'; 

// Import des images pour la gestion de stock (dossier image-gest)
import gest1 from '../image-gest/capt2.png';
import gest2 from '../image-gest/capt1.png';
import gest3 from '../image-gest/capt3.png';
import gest4 from '../image-gest/capt4.png';
import gest5 from '../image-gest/capt5.png';

// Import des images pour le suivi des analyses (dossier image-analyse)
import analyse2 from '../image-analyse/capt2.png';
import analyse3 from '../image-analyse/capt3.png';
import analyse4 from '../image-analyse/capt4.png';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  images: string[];
}

export function Projet() {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Application de Gestion de Stock",
      category: "Stage - LNSP",
      description: "Développement fullstack d'une application web destinée à l'optimisation, au suivi des entrées/sorties des fournitures de bureau et d'entretient du laboratoire. Code source versionné sur GitLab et déployé en production.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "Déployé et en production",
      images: [gest1, gest2, gest3, gest4, gest5]
    },
    {
      id: 2,
      title: "Application de Suivi des Analyses",
      category: "Stage - LNSP",
      description: "Plateforme web complète permettant d'enregistrer, de suivre et d'administrer les différentes analyses effectuées au sein de l'institution. Intégrée avec succès dans l'infrastructure technique.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "Déployé et en production",
      images: [analyse2, analyse3, analyse4]
    }
  ];

  return (
    <section id="projet" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Mes Projets Professionnels</h2>
        <p className="text-muted">Applications web fullstack développées en milieu professionnel (Stage)</p>
      </div>

      <div className="row g-5">
        {projects.map((project) => (
          <div className="col-lg-6" key={project.id}>
            <div className="card h-100 shadow-sm border-0 overflow-hidden project-card">
              
              {/* Carrousel / Diapositive d'images */}
              <Carousel fade interval={4000} className="project-carousel">
                {project.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 project-slide-img"
                      src={img}
                      alt={`${project.title} - diapositive ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="card-body d-flex flex-column p-4">
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary">{project.category}</span>
                  <span className="badge bg-success">{project.status}</span>
                </div>

                <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                
                <p className="text-muted flex-grow-1 mb-4">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                <div className="mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mention Code Confidentiel / Interne au lieu d'un faux lien */}
                <div className="mt-auto pt-2">
                  <div className="text-center py-2 px-3 bg-light rounded text-muted small d-flex align-items-center justify-content-center gap-2 border">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Code source interne (Confidentialité de stage)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}