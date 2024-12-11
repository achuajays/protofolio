import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code2, Brain, Server, Terminal, Database, Cloud } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["FastAPI", "React", "Node.js", "Express", "Django", "Spring Boot"],
    },
    {
      title: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Natural Language Processing", "Deep Learning", "PyTorch", "TensorFlow"],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "GraphQL", "RESTful APIs"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes"],
    },
    {
      title: "Development Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Git", "Linux", "Agile", "Jira", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;