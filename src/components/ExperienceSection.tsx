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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
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
              className="mb-8 bg-secondary/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Briefcase className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company} - {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="hover:text-primary transition-colors duration-300"
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