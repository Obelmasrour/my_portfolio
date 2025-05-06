import React from 'react';

const skills = {
  cybersecurity: [
    { name: "Pentesting", level: 90 },
    { name: "Sécurité réseau", level: 85 },
    { name: "OWASP ZAP", level: 80 },
    { name: "Kali Linux", level: 90 }
  ],
  development: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "CSS", level: 75 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 80 }
  ],
  tools: [
    { name: "Adobe Premiere Pro", level: 75 },
    { name: "Outils de design", level: 65 },
    { name: "Gestion de réseaux sociaux", level: 80 }
  ]
};

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div 
          className="h-2.5 bg-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillSection: React.FC<{ title: string, skills: Array<{ name: string, level: number }> }> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Compétences
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <SkillSection title="Cybersécurité" skills={skills.cybersecurity} />
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <SkillSection title="Développement" skills={skills.development} />
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <SkillSection title="Outils" skills={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;