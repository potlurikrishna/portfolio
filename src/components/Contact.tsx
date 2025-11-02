import { Mail, User, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_klyqzfw",      // 🔁 Replace with your EmailJS Service ID
        "template_cdkyc4k",     // 🔁 Replace with your Template ID
        form.current,
        "2rLZWGrd-2H-BDCQ4"       // 🔁 Replace with your Public Key
      )
      .then(() => {
        setShowToast(true);
setTimeout(() => setShowToast(false), 4000); // hides after 4 seconds

      })
      .catch((error) => {
        console.error("❌ Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <User size={24} className="text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Whether you're looking for a talented developer, interested in Teckod's services, or want to discuss collaborations, I'm always open to meaningful conversations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="text-blue-300 mr-3" />
                  <a href="mailto:krishnapotluri2003@gmail.com" className="text-white hover:text-blue-200 transition-colors">
                    krishnapotluri2003@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin size={20} className="text-blue-300 mr-3" />
                  <a href="https://www.linkedin.com/in/potluri-krishna/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Github size={20} className="text-blue-300 mr-3" />
                  <a href="https://github.com/potlurikrishna" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">About Teckod</h4>
              <p className="text-blue-100 leading-relaxed">
                Through Teckod, I provide live coding sessions and mentorship to students worldwide. Join hundreds who’ve advanced their programming skills through our platform.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4">Download Resume</h4>
              <a
                href="https://drive.google.com/file/d/1cTpfmYRcIiWKNsfmi_ACZw2t0_EuH7kX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-100">
            © 2024 Potluri Krishna Balamohan. Crafted with passion for innovation.
          </p>
        </div>
      </div>
      {showToast && (
  <div className="fixed bottom-4 right-4 bg-white text-blue-600 px-6 py-3 rounded shadow-lg z-50">
    <strong>Message Sent!</strong> <br />
    Thank you for your message. I'll get back to you soon!
  </div>
)}
    </section>
  );
};

export default Contact;
