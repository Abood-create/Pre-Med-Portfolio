import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-32 max-w-3xl flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Open to opportunities, collaboration, and learning. Please feel free to reach out via email or connect professionally.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="mailto:learning.pre.physician@gmail.com"
            className="group flex flex-col items-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            data-testid="contact-email"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-medium text-lg mb-2">Email</h3>
            <p className="text-sm text-muted-foreground text-center break-all">learning.pre.physician<br/>@gmail.com</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/abdelrahman-mohaisen-943503193"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-2xl bg-card border border-border/50 hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-300"
            data-testid="contact-linkedin"
          >
            <div className="w-14 h-14 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6 text-[#0A66C2]" />
            </div>
            <h3 className="font-serif font-medium text-lg mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center">Connect on LinkedIn</p>
          </a>

          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border/50"
            data-testid="contact-phone"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-serif font-medium text-lg mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground text-center">(408) 394-2690</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
