import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out through any of the following channels:
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;