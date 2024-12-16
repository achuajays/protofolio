import { motion } from "framer-motion";
import { Award, Calendar, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Certification } from "../types/certification";

interface CertificationCardProps {
  certification: Certification;
  issuer: string;
  index: number;
}

const CertificationCard = ({ certification, issuer, index }: CertificationCardProps) => {
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
        <CardContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-2">{certification.title}</h4>
            {(certification.issued || certification.expired) && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Calendar className="w-4 h-4" />
                {certification.issued && <span>Issued: {certification.issued}</span>}
                {certification.expired && <span>Expired: {certification.expired}</span>}
              </div>
            )}
            {certification.credentialId && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-2"
              >
                <LinkIcon className="w-4 h-4" />
                Credential ID: {certification.credentialId}
              </a>
            )}
            {certification.skills && certification.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, skillIndex) => (
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationCard;