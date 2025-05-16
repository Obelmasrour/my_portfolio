import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Header = () => {
  return (
    <section id="home" className="min-h-screen pt-16 relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMjBIMCBWMCBoNjAgdjIwIEgzMCB2NDAgSDAgeC0zMCBWMjAgeiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="./new.png" // ← depuis dossier public/
              alt="Ossama Belmasrour"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Ossama Belmasrour</h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-6">
            Ingénieur Cybersécurité et Co-fondateur de ShadowTrace outil de pentesting
            </h2>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/Obelmasrour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ossama-belmasrour-513892277/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ossamabelmasrour@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>

            <a
               href="/my_portfolio/" //curriculum_vitae.pdf
              download
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Télécharger CV
            </a>
          </div>
        </div> 

      </div>
    </section>
  );
};

export default Header;
