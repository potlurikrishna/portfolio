
import { Code, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Village Management System",
      description: "Developed a full-stack web portal using Flask, JavaScript, and MongoDB that enables different user roles (residents, officials, administrators) to manage community tasks. The system includes features such as maintenance requests, event scheduling, and facility bookings to streamline village operations.",
      technologies: ["Flask", "JavaScript", "MongoDB", "HTML", "CSS"],
      highlights: ["Multi-role user management", "Community task coordination", "Resource management"],
      category: "Full-Stack Development"
    },
    {
      title: "ML-Based Exoplanet Detection",
      description: "Built a machine learning pipeline in Python to analyze NASA Kepler telescope light-curve data and identify candidate exoplanets. After feature extraction and model training, the project achieved high performance (around 96% recall) in classifying planetary signals.",
      technologies: ["Python", "Machine Learning", "NASA Kepler Data", "Feature Engineering"],
      highlights: ["96% recall accuracy", "Scientific data analysis", "Real astronomical data"],
      category: "Machine Learning"
    },
    {
      title: "Zomato Data Visualization",
      description: "Conducted exploratory data analysis on a Zomato restaurant dataset using Python's pandas and seaborn libraries. I cleaned and prepared the data, then created detailed visual reports (bar charts, heatmaps, etc.) to highlight trends in restaurant categories, pricing, and customer preferences.",
      technologies: ["Python", "Pandas", "Seaborn", "Data Analysis"],
      highlights: ["Comprehensive data cleaning", "Strategic insights", "Visual reporting"],
      category: "Data Science"
    },
    {
      title: "Real-Time Weather Forecast",
      description: "Developed a responsive web application that fetches live weather data from an external API (e.g., OpenWeatherMap) to display current conditions (temperature, humidity, etc.) for any city. Users can enter a location and instantly see up-to-date forecasts in the interface.",
      technologies: ["JavaScript", "API Integration", "HTML", "CSS", "Weather API"],
      highlights: ["Real-time data fetching", "Responsive design", "External API integration"],
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Code size={24} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <ArrowUp size={14} className="text-blue-500 mr-2 transform rotate-45" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
