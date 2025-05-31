import { BookOpen, Calendar, Award } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Master Cybersécurité",
    institution: "Université Catholique de Lille",
    period: "2023 - 2025",
    description: "Formation avancée en cybersécurité, incluant des modules sur la sécurité des réseaux, le pentesting, la gestion de risque, et le développement sécurisé."
  },
  {
    id: 2,
    degree: "Licence Science Math Info",
    institution: "Université scientifique Rabat",
    period: "2023",
    description: "Formation en sciences mathématiques et informatiques, avec une spécialisation en algorithmique et programmation."
  },
  {
    id: 3,
    degree: "Baccalauréat Science Maths",
    institution: "Lycée ELGHAZALIE",
    period: "2020",
    description: "Formation générale scientifique avec une spécialisation en mathématiques, incluant des modules de programmation."
  }
];

const certifications = [
  {
    name: "Certified Ethical Hacker (CEH)",
    provider: "EC-Council"
  }, {
    name: "Level 12",
    provider: "Tryhackme"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Formations
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-600 pl-8 ml-4">
            {educations.map((education, index) => (
              <div key={education.id} className="mb-12">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] mt-1.5"></div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{education.degree}</h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center text-gray-600">
                      <BookOpen size={16} className="mr-1" />
                      <span>{education.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{education.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-600 text-white rounded-full mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Certifications visées</h3>
            <ul className="text-gray-700 space-y-2">
              {certifications.map((cert, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{cert.name}</span> — {cert.provider}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
