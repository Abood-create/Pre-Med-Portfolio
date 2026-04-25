import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  id: string;
  name: string;
  org: string;
  issued: string;
  expires: string;
  credentialId: string;
}

const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Basic Introduction to Biosafety",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2029",
    credentialId: "74903508"
  },
  {
    id: "cert-2",
    name: "Personal Protective Equipment",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2029",
    credentialId: "74903512"
  },
  {
    id: "cert-3",
    name: "Emergency and Incident Response to Biohazard Spills and Releases",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2027",
    credentialId: "74903510"
  },
  {
    id: "cert-4",
    name: "NIH Recombinant DNA Guidelines",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2029",
    credentialId: "74903511"
  },
  {
    id: "cert-5",
    name: "OSHA Bloodborne Pathogens",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2027",
    credentialId: "74903509"
  },
  {
    id: "cert-6",
    name: "Initial Biosafety Training",
    org: "CITI Program",
    issued: "Jan 2026",
    expires: "Jan 2029",
    credentialId: "74822346"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Certifications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formal training and credentials ensuring strict adherence to clinical, safety, and operational standards.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-sm flex flex-col h-full hover:border-primary/30 hover:shadow-md transition-all duration-300"
              data-testid={`cert-card-${cert.id}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#005a8c]/10 flex items-center justify-center border border-[#005a8c]/20">
                  <Globe className="w-6 h-6 text-[#005a8c]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm font-medium text-[#005a8c]">{cert.org}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/40 text-sm text-muted-foreground space-y-1">
                <p>Issued {cert.issued} · Expires {cert.expires}</p>
                <p>Credential ID {cert.credentialId}</p>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full text-sm font-medium h-9 hover:bg-secondary hover:text-secondary-foreground" data-testid={`btn-show-credential-${cert.id}`}>
                  Show credential <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
