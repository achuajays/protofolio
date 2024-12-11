import { motion } from "framer-motion";
import { Car } from "lucide-react";

const CarAnimation = () => {
  return (
    <div className="w-full h-24 relative overflow-hidden my-8">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ 
          x: "100%",
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 -translate-y-1/2"
      >
        <Car 
          className="w-12 h-12 text-primary transform -scale-x-100" 
          strokeWidth={1.5}
        />
      </motion.div>
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-primary opacity-30" />
    </div>
  );
};

export default CarAnimation;