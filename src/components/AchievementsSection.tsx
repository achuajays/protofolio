import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = {
    hackathon: [
      { title: "1st Place", description: "State-Level Hackathon", icon: <Trophy className="w-6 h-6 text-yellow-500" /> },
      { title: "3rd Place", description: "State-Level Hackathon", icon: <Medal className="w-6 h-6 text-bronze-500" /> },
      { title: "2nd Place", description: "National-Level Hackathon", icon: <Award className="w-6 h-6 text-silver-500" /> },
      { title: "2nd Place", description: "International Hackathon", icon: <Star className="w-6 h-6 text-silver-500" /> }
    ],
    coding: [
      { title: "1st Place", description: "State-Level Coding Competition", icon: <Trophy className="w-6 h-6 text-yellow-500" /> },
      { title: "1st Place", description: "State-Level Coding Debugging Competition", icon: <Trophy className="w-6 h-6 text-yellow-500" /> }
    ],
    webdev: [
      { title: "2nd Place", description: "State-Level Web Development Competition (x2)", icon: <Award className="w-6 h-6 text-silver-500" /> }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-secondary/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          My Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Hackathon Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Hackathon Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.hackathon.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-secondary/80 border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-primary/10 rounded-lg"
                      >
                        {achievement.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Coding Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.coding.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-secondary/80 border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-primary/10 rounded-lg"
                      >
                        {achievement.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Web Development Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Web Development Achievements</h3>
            <div className="grid grid-cols-1 gap-6">
              {achievements.webdev.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-secondary/80 border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-primary/10 rounded-lg"
                      >
                        {achievement.icon}
                      </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;