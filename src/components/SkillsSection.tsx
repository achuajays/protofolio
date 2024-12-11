import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["FastAPI", "PyTorch", "React", "Node.js"],
    "AI & ML": ["Machine Learning", "Natural Language Processing", "Deep Learning"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Linux"]
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {skill}
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

export default SkillsSection;