
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Scientific Computing with Python",
      issuer: "freeCodeCamp",
      date: "2024",
      description: "Comprehensive certification covering Python programming for scientific computing applications",
      link: "https://drive.google.com/file/d/16C1xsZS0LQ5BTa3-ud-J8kez0nQuVnzn/view?usp=sharing"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "2024", 
      description: "Professional certification demonstrating proficiency in SQL database management and queries",
      link: "https://drive.google.com/file/d/1OMbAPVGNad3MrMS4RRQgTSITdGA4E6yL/view?usp=sharing"
    },
    {
      title: "Java Certification",
      issuer: "HackerRank",
      date: "2024",
      description: "Advanced certification validating Java programming skills and object-oriented programming concepts",
      link: "https://drive.google.com/file/d/14u7ioLNWg_xhSdFFKLEdLL5vsPuLAZb2/view?usp=sharing"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB University",
      date: "2024",
      description: "Foundation certification covering MongoDB database fundamentals and NoSQL concepts",
      link: "https://drive.google.com/file/d/16mXpvQMRIaildrRfXTseMMT0larIY90x/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
