// src/data/portfolioData.ts
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  linkGitlab?: string;
}

export const myProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Application de Gestion de Stock",
    category: "Stage - LNSP",
    description: "Développement fullstack d'une application web pour l'optimisation et le suivi des stocks du laboratoire. Code hébergé sur GitLab et déployé en production.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "Déployé et en production",
    linkGitlab: "https://gitlab.com/votre-compte/projet-stock"
  },
  {
    id: 2,
    title: "Application de Suivi des Analyses",
    category: "Stage - LNSP",
    description: "Plateforme web de gestion et d'enregistrement des analyses de laboratoire. Solution fullstack intégrée dans l'infrastructure de l'entreprise.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "Déployé et en production",
    linkGitlab: "https://gitlab.com/votre-compte/projet-analyses"
  }
];