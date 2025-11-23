import { Laptop as LaptopCode, Shield, Video, Bone as Drone } from 'lucide-react';

const About = () => {
  const passions = [
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Réseau et sécurité",
      description: "Passionné par l'adminisration et la protection des systèmes et l'identification des vulnérabilités."
    },
    {
      icon: <LaptopCode size={32} className="text-blue-600" />,
      title: "Développement",
      description: "Création d'outils et d'applications pour répondre à des besoins spécifiques."
    },
    {
      icon: <Video size={32} className="text-blue-600" />,
      title: "Création de contenu",
      description: "Production des documentaires et de contenu éducatif."
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          À propos de moi
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Je suis ingénieur systèmes & réseaux, spécialisé dans l’administration, le support technique N2/N3 et l’optimisation des infrastructures informatiques. 
            J’interviens sur le déploiement, la supervision et le maintien en conditions opérationnelles des environnements serveurs, réseaux et solutions cloud.
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Je suis Co-fondateur de ShadowTrace, un outil de pentesting automatisé conçu pour détecter rapidement les vulnérabilités au sein des systèmes informatiques.<br /> 
          </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
Ce qui me motive : proposer un support fiable, résoudre des problématiques complexes, améliorer la performance des systèmes et accompagner les utilisateurs comme les équipes techniques. 
              J’aime tester de nouvelles approches, automatiser lorsque c’est possible et rester en veille constante pour progresser.          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-8">Mes passions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {passions.map((passion, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {passion.icon}
              </div>
              <h4 className="text-xl font-medium text-center mb-2">{passion.title}</h4>
              <p className="text-gray-600 text-center">{passion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
