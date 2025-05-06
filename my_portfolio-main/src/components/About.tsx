import { Laptop as LaptopCode, Shield, Video, Bone as Drone } from 'lucide-react';

const About = () => {
  const passions = [
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Cybersécurité",
      description: "Passionné par la protection des systèmes et l'identification des vulnérabilités."
    },
    {
      icon: <LaptopCode size={32} className="text-blue-600" />,
      title: "Développement",
      description: "Création d'outils et d'applications pour répondre à des besoins spécifiques."
    },
    {
      icon: <Video size={32} className="text-blue-600" />,
      title: "Création de contenu",
      description: "Production de contenu éducatif dans le domaine de la sécurité informatique."
    },
    {
      icon: <Drone size={32} className="text-blue-600" />,
      title: "Pilotage de drone",
      description: "Exploration aérienne et captures visuelles d'environnements variés."
    }
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
            Je suis ingénieur en cybersécurité , spécialisé dans l’analyse des vulnérabilités, les tests d’intrusion et la gestion de la sécurité réseau.          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Je suis Co-fondateur de ShadowTrace, un outil de pentesting automatisé conçu pour détecter rapidement les vulnérabilités au sein des systèmes informatiques.<br />
          Ma vision : rendre la cybersécurité proactive, accessible et efficace pour tous, 
          j’aime créer des solutions concrètes, expérimenter de nouvelles approches et apprendre continuellement pour rester à la pointe. 
          </p>
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
