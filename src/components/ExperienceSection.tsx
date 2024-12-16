import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "AOT Technologies",
      period: "Present",
      description: [
        "Developed PDF and Web Scraping Application using Python, Langchain, and Ollama",
        "Created AI Scribe Application for doctor-patient transcription using Python, Deepgram, OpenAI",
        "Built FastAPI application for AI project implementation",
        "Developed Fax Automation System using Python, Anthropic, and Streamlit",
        "Implemented OSCAR EMR data extraction using Java and JSP",
        "Created multiple AI agents using OpenAI, Anthropic, and LangChain",
        "Developed Teaching, Resume Builder, Game, Email, and Job Search agents"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "AOT Technologies",
      period: "Previous",
      description: [
        "Worked on AI-driven data extraction from PDFs using Python, PyTorch, and transformers",
        "Contributed to OSCAR project backend setup using Java and JSP",
        "Developed automation scripts for data processing and analysis",
        "Implemented machine learning models for document classification"
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Acmagrade",
      period: "Aug 2023 - Dec 2023 · 5 mos",
      description: [
        "Specialized in AI and machine learning applications",
        "Developed and implemented AI solutions for real-world problems",
        "Gained hands-on experience with various AI frameworks and tools",
        "Contributed to multiple AI-driven projects during the internship"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary/50 to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="mb-8 bg-secondary/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary/20 p-3 rounded-full"
                >
                  <Briefcase className="text-primary w-6 h-6" />
                </motion.div>
                <div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-white"
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400"
                  >
                    {exp.company} - {exp.period}
                  </motion.p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10, color: "rgb(var(--primary))" }}
                    className="transition-colors duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;