import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ShadowTrace",
    role: "Créateur & Développeur",
    period: "2025 - Présent",
    description: "Outil de pentesting automatisé, développé pour la détection rapide de vulnérabilités dans les systèmes informatiques. Conçu pour simplifier et accélérer les tests d'intrusion.",
    technologies: ["Js", "Owasp ZAP", "Kali", "Sécurité"],
    imageUrl: "./shadow.jpg" 

  },
  {
    id: 2,
    title: "Orange",
    role: "Développeur junior",
    period: "Avril - Juillet 2022",
    description: "Développement web et gestion de projet pour l'amélioration des systèmes internes. Collaboration avec l'équipe de développement pour créer des solutions efficaces.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "./images.jpeg" 


  },
  {
    id: 3,
    title: "Bien Vieillir IDF",
    role: "Ingénierie Systèmes & Sécurité (alternance)",
    period: "Juillet 2024 – Septembre 2025",
    description: "Support informatique, diagnostic matériel, installation de postes, assistance technique et sécurité réseau au sein d’une organisation spécialisée dans les services aux personnes âgées.",
    technologies: ["Windows", "Support IT", "Diagnostic", "Firewall"],
    imageUrl: "./dd.png"


  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Projets
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)' 
                  }}
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
