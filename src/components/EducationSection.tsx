import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Analysis",
      institution: "Amity University",
      period: "2024-2027",
      achievements: [
        "Specialized in Data Science and Machine Learning",
        "Completed projects in AI and Data Analytics",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Central Polytechnic College",
      period: "2021-2024",
      achievements: [
        "Focus on software development and programming",
        "Developed multiple web applications",
        "Academic excellence award recipient"
      ]
    },
    {
      degree: "Plus 2 in Biology Science",
      institution: "St. Joseph HSS",
      period: "2019-2021",
      achievements: [
        "Strong foundation in scientific principles",
        "Active participation in science exhibitions",
        "School representative for academic competitions"
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
      y: 100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
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
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Education
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary/20 p-3 rounded-full"
                >
                  <GraduationCap className="text-primary w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-white"
                  >
                    {edu.degree}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400"
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500"
                  >
                    {edu.period}
                  </motion.p>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    className="mt-4 space-y-2"
                  >
                    {edu.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 10, color: "rgb(var(--primary))" }}
                        className="text-gray-300 transition-colors duration-300 flex items-center gap-2"
                      >
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;