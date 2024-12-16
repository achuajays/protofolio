import { motion } from "framer-motion";
import { Award, Calendar, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Certification } from "../types/certification";

interface CertificationCardProps {
  issuer: string;
  certifications: Certification[];
  index: number;
}

const CertificationCard = ({ issuer, certifications, index }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-secondary border-primary/20 hover:border-primary/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            {issuer}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {certifications.map((cert, certIndex) => (
            <motion.div
              key={certIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: certIndex * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-primary/10 pt-4 first:border-t-0 first:pt-0"
            >
              <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
              {(cert.issued || cert.expired) && (
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  {cert.issued && <span>Issued: {cert.issued}</span>}
                  {cert.expired && <span>Expired: {cert.expired}</span>}
                </div>
              )}
              {cert.credentialId && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-2"
                >
                  <LinkIcon className="w-4 h-4" />
                  Credential ID: {cert.credentialId}
                </a>
              )}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationCard;