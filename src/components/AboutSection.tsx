import { motion } from "framer-motion";
import { Code2, Brain, Database } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Proficient in building end-to-end web applications using modern technologies."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Passionate about implementing AI solutions and machine learning algorithms."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Experienced in designing robust and scalable backend systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary via-secondary/80 to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-flow"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-300 mb-12 text-center leading-relaxed"
          >
            <p className="mb-6">
              As a Junior Software Developer at AOT Technologies, I bring a unique blend of technical expertise 
              and creative problem-solving abilities to every project. My journey in technology is driven by 
              a deep passion for AI, machine learning, and backend development.
            </p>
            <p>
              With a strong foundation in Python, Java, and JavaScript, I specialize in creating innovative 
              solutions that bridge the gap between complex technical challenges and practical business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-secondary/80 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary/10 p-3 rounded-full w-fit mb-4"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;