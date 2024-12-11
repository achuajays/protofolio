import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I'm a Junior Software Developer at AOT Technologies with a passion for AI, machine learning, and backend development. 
            My expertise spans Python, Java, and JavaScript, allowing me to create innovative solutions across different domains.
          </p>
          <p className="text-lg text-gray-300">
            I'm committed to leveraging technology to enhance digital education and healthcare systems, 
            bringing a blend of technical acumen and creative problem-solving skills to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;