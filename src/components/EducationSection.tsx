import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Analysis",
      institution: "Amity University",
      period: "2020-2023"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Central Polytechnic College",
      period: "2017-2020"
    },
    {
      degree: "Plus 2 in Biology Science",
      institution: "St. Joseph HSS",
      period: "2015-2017"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="bg-primary/20 p-3 rounded-full">
                <GraduationCap className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;