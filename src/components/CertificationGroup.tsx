import { motion } from "framer-motion";
import { CertificationGroup as CertificationGroupType } from "../types/certification";
import CertificationCard from "./CertificationCard";

interface CertificationGroupProps {
  group: CertificationGroupType;
  startIndex: number;
}

const CertificationGroup = ({ group, startIndex }: CertificationGroupProps) => {
  return (
    <>
      {group.certifications.map((cert, index) => (
        <CertificationCard
          key={`${group.issuer}-${index}`}
          certification={cert}
          issuer={group.issuer}
          index={startIndex + index}
        />
      ))}
    </>
  );
};

export default CertificationGroup;