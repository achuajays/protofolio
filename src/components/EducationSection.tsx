import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Analysis",
      institution: "Amity University",
      period: "2020-2023",
      achievements: [
        "Specialized in Data Science and Machine Learning",
        "Completed projects in AI and Data Analytics",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Central Polytechnic College",
      period: "2017-2020",
      achievements: [
        "Focus on software development and programming",
        "Developed multiple web applications",
        "Academic excellence award recipient"
      ]
    },
    {
      degree: "Plus 2 in Biology Science",
      institution: "St. Joseph HSS",
      period: "2015-2017",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
              className="bg-secondary/80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
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
                        className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
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