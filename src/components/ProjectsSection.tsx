import { motion } from "framer-motion";
import { Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Article Summarizer App",
      description: "A Streamlit-based application using Hugging Face's Transformers library for article summarization.",
      tech: ["Python", "Streamlit", "Hugging Face"]
    },
    {
      title: "Asian Drama Script Assistant",
      description: "Streamlit application generating scripts for Asian dramas using OpenAI's GPT-3.5 turbo model.",
      tech: ["Python", "Streamlit", "OpenAI"]
    },
    {
      title: "OpenAI RoadMap Recommender",
      description: "Chatbot utilizing OpenAI API to generate responses based on user prompts using GPT-3.5.",
      tech: ["Python", "OpenAI", "NLP"]
    },
    {
      title: "Study-Spot",
      description: "Educational platform featuring Automatic Grading, Career Recommender, and Text Summarization.",
      tech: ["Python", "Machine Learning", "NLP"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-primary w-6 h-6" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;