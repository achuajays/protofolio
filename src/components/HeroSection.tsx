import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-10 animate-gradient-flow"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src="/lovable-uploads/86c81586-96c3-4da8-a26d-1d87dce33409.png" alt="Adarsh Ajay" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Adarsh Ajay</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Junior Software Developer at AOT Technologies
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Specializing in AI, Machine Learning, and Backend Development
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;