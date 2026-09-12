import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Stethoscope, Award, Mail } from "lucide-react";
import { Layout } from "@/components/layout";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 md:py-32">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Stethoscope className="w-4 h-4 mr-2" />
            Pre-Med Student
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#DD571C] tracking-tight mb-6">
            Abdelrahman <br className="md:hidden" />Mohaisen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Dedicated to patient care, rigorous research, and continuous learning. 
            Building a foundation for a future in medicine through service and academic excellence.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/experience" className="group block h-full">
            <motion.div 
              variants={itemVariants}
              className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
              data-testid="card-experience"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">Experience</h3>
              <p className="text-muted-foreground text-sm flex-1">
                Clinical volunteering, internships, and patient care history.
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-primary">
                View timeline <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          <Link href="/certifications" className="group block h-full">
            <motion.div 
              variants={itemVariants}
              className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
              data-testid="card-certifications"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-accent transition-colors">Certifications</h3>
              <p className="text-muted-foreground text-sm flex-1">
                Biosafety, OSHA, and clinical readiness credentials.
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-accent">
                View credentials <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          <Link href="/contact" className="group block h-full">
            <motion.div 
              variants={itemVariants}
              className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-secondary-foreground/30 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
              data-testid="card-contact"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-secondary-foreground transition-colors">Contact</h3>
              <p className="text-muted-foreground text-sm flex-1">
                Get in touch via email or connect on LinkedIn.
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-secondary-foreground">
                Connect <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
