export interface Certification {
  title: string;
  issued?: string;
  expired?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface CertificationGroup {
  issuer: string;
  certifications: Certification[];
}