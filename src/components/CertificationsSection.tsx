import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { CertificationGroup } from "../types/certification";

const certifications: CertificationGroup[] = [
  {
    issuer: "HackerRank",
    certifications: [
      {
        title: "FrontEnd Developer Certification",
        issued: "Jul 2024",
        credentialId: "94ceab3ebeeb",
        credentialUrl: "https://www.hackerrank.com/certificates/94ceab3ebeeb",
        skills: ["React.js"]
      },
      {
        title: "JavaScript (Intermediate) Certificate",
        issued: "Jul 2024",
        credentialId: "cd2ba553b9fb",
        credentialUrl: "https://www.hackerrank.com/certificates/cd2ba553b9fb",
        skills: ["JavaScript"]
      },
      {
        title: "Node.js Certificate",
        issued: "Jul 2024",
        credentialId: "96920d61aeb8",
        credentialUrl: "https://www.hackerrank.com/certificates/96920d61aeb8"
      },
      {
        title: "Software Intern Certification",
        issued: "Jul 2024",
        credentialId: "e3b0fea6c569",
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/e3b0fea6c569",
        skills: ["JavaScript", "MySQL"]
      },
      {
        title: "REST API Certification",
        issued: "Apr 2024",
        credentialId: "4ae5199faa44",
        credentialUrl: "https://www.hackerrank.com/certificates/4ae5199faa44",
        skills: ["Python"]
      },
      {
        title: "Python Certification",
        skills: ["Machine Learning", "Python"]
      },
      {
        title: "SQL Certification"
      }
    ]
  },
  {
    issuer: "Microsoft",
    certifications: [
      {
        title: "Introduction to Azure Data Lake Storage Gen2",
        issued: "Jul 2024",
        skills: ["Microsoft Azure", "Data Analysis"]
      },
      {
        title: "Introduction to Data Engineering",
        issued: "Jul 2024",
        skills: ["Microsoft Azure", "Data Analysis"]
      },
      {
        title: "Create Computer Vision Solutions with Azure AI Vision",
        issued: "Apr 2024",
        expired: "Apr 2024",
        skills: ["Microsoft Azure", "Python", "Image Processing", "Artificial Intelligence", "JSON"]
      },
      {
        title: "Develop AI Solution on Azure",
        issued: "Apr 2024",
        expired: "Apr 2024",
        skills: ["Microsoft Azure", "Python", "Artificial Intelligence", "Cloud Computing"]
      },
      {
        title: "Get Started with Azure AI Services",
        issued: "Apr 2024",
        expired: "Apr 2024",
        skills: ["Microsoft Azure", "Artificial Intelligence"]
      },
      {
        title: "Microsoft Azure AI Fundamentals: Generative AI",
        issued: "Apr 2024",
        expired: "Apr 2024",
        skills: ["Generative AI", "Microsoft Azure", "OPENAI API"]
      },
      {
        title: "GitHub Skills Certificate",
        issued: "Apr 2024",
        expired: "Apr 2024",
        skills: ["Git", "Python", "GitHub"]
      }
    ]
  },
  {
    issuer: "Brainovision Solutions India Pvt. Ltd",
    certifications: [
      {
        title: "Data Science in Python",
        issued: "Mar 2024",
        skills: ["Machine Learning", "Deep Learning", "NumPy", "Pandas", "Matplotlib"]
      }
    ]
  },
  {
    issuer: "Infosys",
    certifications: [
      {
        title: "Django",
        issued: "Dec 2023",
        skills: ["Machine Learning", "Django"]
      },
      {
        title: "JavaScript",
        issued: "Dec 2023",
        skills: ["Machine Learning", "JavaScript"]
      }
    ]
  },
  {
    issuer: "Udemy",
    certifications: [
      {
        title: "Machine Learning",
        issued: "Dec 2023",
        skills: ["Machine Learning"]
      }
    ]
  },
  {
    issuer: "Acmegrade",
    certifications: [
      {
        title: "Artificial Intelligence",
        issued: "Oct 2023",
        skills: ["Machine Learning", "Deep Learning", "Transformers"]
      }
    ]
  },
  {
    issuer: "Stanford University",
    certifications: [
      {
        title: "Machine Learning",
        skills: ["Machine Learning", "Transformers"]
      }
    ]
  },
  {
    issuer: "Sahara",
    certifications: [
      {
        title: "Masters in Data Science",
        skills: ["Machine Learning", "Transformers"]
      }
    ]
  },
  {
    issuer: "NPTEL",
    certifications: [
      {
        title: "Python Certification",
        skills: ["Machine Learning"]
      }
    ]
  },
  {
    issuer: "IBM",
    certifications: [
      {
        title: "Python for Data Science",
        skills: ["Machine Learning", "Data Analysis"]
      }
    ]
  },
  {
    issuer: "Google",
    certifications: [
      {
        title: "Google Cloud Platform Fundamentals",
        issued: "Jul 2024",
        skills: ["Cloud Computing", "GCP", "DevOps"]
      },
      {
        title: "Google Analytics Certification",
        issued: "Jun 2024",
        skills: ["Data Analytics", "Google Analytics", "Web Analytics"]
      }
    ]
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Certifications & Achievements
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((group, index) => (
            <CertificationCard
              key={index}
              issuer={group.issuer}
              certifications={group.certifications}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
