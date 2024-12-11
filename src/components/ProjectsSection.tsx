import { motion } from "framer-motion";
import { Code, Terminal, Bot, BookOpen, Brain, Sparkles, FileText, MessageSquare, Headphones, Printer, Database, FileSearch, Mail, Briefcase, GraduationCap, Gamepad } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Scribe",
      description: "Advanced medical transcription application integrating Deepgram's speech-to-text, OpenAI, and Groq Whisper for real-time SOAP note generation and audio processing.",
      tech: ["Python", "Deepgram API", "OpenAI", "FastAPI", "Socket.IO"],
      icon: <Headphones className="text-primary w-6 h-6" />
    },
    {
      title: "Class Name Generator",
      description: "AI-powered tool that generates meaningful Python class names from descriptions using NLP, enhancing code readability and organization.",
      tech: ["Python", "Streamlit", "Transformers", "Hugging Face"],
      icon: <Code className="text-primary w-6 h-6" />
    },
    {
      title: "ChatGPT API Integration",
      description: "FastAPI-based implementation showcasing ChatGPT integration with session management and conversational AI capabilities.",
      tech: ["FastAPI", "Python", "OpenAI API"],
      icon: <MessageSquare className="text-primary w-6 h-6" />
    },
    {
      title: "Fax Automation System",
      description: "Comprehensive fax processing system using AI for data extraction, with automated archiving and database integration.",
      tech: ["Python", "Streamlit", "Anthropic API", "PostgreSQL", "Docker"],
      icon: <Printer className="text-primary w-6 h-6" />
    },
    {
      title: "OSCARS Data Extraction",
      description: "Medical records data extraction system built with Java and JSP for healthcare applications and analytics.",
      tech: ["Java", "JSP", "PDF parsing"],
      icon: <Database className="text-primary w-6 h-6" />
    },
    {
      title: "PDF Splitter & Data Extractor",
      description: "Advanced tool for PDF processing with OCR capabilities and ML-powered data field extraction.",
      tech: ["Python", "PyPDF2", "LangChain", "Transformers"],
      icon: <FileSearch className="text-primary w-6 h-6" />
    },
    {
      title: "Teaching Agent",
      description: "AI-powered educational assistant providing personalized learning experiences and interactive tutorials.",
      tech: ["Python", "OpenAI API", "Streamlit"],
      icon: <GraduationCap className="text-primary w-6 h-6" />
    },
    {
      title: "Resume Builder Agent",
      description: "Intelligent system that helps create and optimize professional resumes using AI-driven suggestions.",
      tech: ["Python", "OpenAI API", "React"],
      icon: <FileText className="text-primary w-6 h-6" />
    },
    {
      title: "Game Agent",
      description: "AI-powered gaming assistant that provides strategic gameplay suggestions and performance analysis.",
      tech: ["Python", "Machine Learning", "PyTorch"],
      icon: <Gamepad className="text-primary w-6 h-6" />
    },
    {
      title: "Email Agent",
      description: "Smart email management system with automated response generation and priority sorting.",
      tech: ["Python", "OpenAI API", "FastAPI"],
      icon: <Mail className="text-primary w-6 h-6" />
    },
    {
      title: "Job Search Agent",
      description: "AI-driven job search assistant that matches skills with opportunities and provides application insights.",
      tech: ["Python", "OpenAI API", "Web Scraping"],
      icon: <Briefcase className="text-primary w-6 h-6" />
    },
    {
      title: "Article Summarizer",
      description: "Streamlit application leveraging Hugging Face's Transformers for efficient article summarization.",
      tech: ["Python", "Streamlit", "Hugging Face", "NLP"],
      icon: <Terminal className="text-primary w-6 h-6" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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