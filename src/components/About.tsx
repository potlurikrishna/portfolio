
import { User, Code, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
              <User size={48} className="text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate Developer & Educator
              </h3>
              <p className="text-blue-100 leading-relaxed">
                As a 2025 Computer Science & Engineering graduate, I combine technical excellence 
                with educational leadership to create meaningful impact in the tech community.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                I am a 2025 graduate in Computer Science & Engineering with a solid foundation in software development and data analysis. I co-founded and instruct at Teckod, a live coding education platform, where I design and deliver interactive coding sessions to mentor aspiring developers. My core interests lie in full-stack development and machine learning, and I enjoy applying these skills to solve real-world problems.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl mb-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-slate-800">Co-Founder & Instructor at Teckod</h4>
                </div>
                <p className="text-slate-600">
                  I co-founded Teckod, a live coding education platform where I design and deliver 
                  interactive coding sessions to mentor aspiring developers. Through personalized 
                  instruction and hands-on learning experiences, I help students bridge the gap 
                  between academic knowledge and practical programming skills.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-slate-800">Technical Excellence</h4>
                </div>
                <p className="text-slate-600">
                  My expertise spans full-stack development with proficiency in Python, Java, 
                  JavaScript, Flask, and modern web technologies. I have successfully delivered 
                  projects ranging from village management systems to machine learning solutions 
                  for astronomical data analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
