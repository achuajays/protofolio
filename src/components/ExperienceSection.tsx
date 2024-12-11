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
        "Developed Fax Automation System using Python, Anthropic, and Streamlit"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "AOT Technologies",
      period: "Previous",
      description: [
        "Worked on AI-driven data extraction from PDFs using Python, PyTorch, and transformers",
        "Contributed to OSCAR project backend setup using Java and JSP"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 bg-secondary/50 p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="text-primary w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company} - {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;