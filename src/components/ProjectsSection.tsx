import { motion } from "framer-motion";
import { Code, Terminal, Bot, BookOpen, Brain, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Article Summarizer",
      description: "A Streamlit application leveraging Hugging Face's Transformers library for efficient article summarization. Features include text extraction, key points highlighting, and customizable summary lengths.",
      tech: ["Python", "Streamlit", "Hugging Face", "NLP"],
      icon: <Terminal className="text-primary w-6 h-6" />
    },
    {
      title: "OpenAI RoadMap Assistant",
      description: "An intelligent chatbot utilizing OpenAI's GPT-3.5 API to generate personalized learning roadmaps and career guidance. Provides interactive conversations and customized recommendations.",
      tech: ["Python", "OpenAI API", "Streamlit", "LangChain"],
      icon: <Bot className="text-primary w-6 h-6" />
    },
    {
      title: "Asian Drama Script Assistant",
      description: "Creative writing tool powered by GPT-3.5 that generates unique Asian drama scripts. Supports multiple genres and customizable plot elements.",
      tech: ["Python", "OpenAI", "Streamlit", "NLP"],
      icon: <BookOpen className="text-primary w-6 h-6" />
    },
    {
      title: "Study-Spot",
      description: "Comprehensive educational platform featuring automatic grading, career recommendations, and advanced text summarization capabilities.",
      tech: ["Python", "Machine Learning", "NLP", "Streamlit"],
      icon: <Brain className="text-primary w-6 h-6" />
    },
    {
      title: "Edu4Every",
      description: "Educational technology platform aimed at making learning accessible to everyone. Includes interactive lessons, progress tracking, and personalized learning paths.",
      tech: ["Python", "React", "MongoDB", "Express"],
      icon: <Sparkles className="text-primary w-6 h-6" />
    },
    {
      title: "Streamlit RG Application",
      description: "Resource management application built with Streamlit, featuring data visualization, real-time analytics, and interactive dashboards.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      icon: <Code className="text-primary w-6 h-6" />
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
                {project.icon}
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