import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import CarAnimation from "../components/CarAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            Adarsh Ajay
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <a href="https://github.com/achuajays" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-ajay-9a8073226/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:adarshajays139@gmail.com">
              <Mail className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </nav>

      <main className="pt-20">
        <HeroSection />
        <CarAnimation />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;