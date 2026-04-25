import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MapPin, Calendar, Building2 } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  type: string;
  date: string;
  location: string;
  format: string;
  description: string;
}

const experiences: TimelineEvent[] = [
  {
    id: "exp-1",
    title: "Patient Intake Volunteer",
    organization: "APPNA Community Health Clinic STL Inc",
    type: "Internship",
    date: "Sep 2024 – Present",
    location: "San Jose, California, United States",
    format: "Hybrid",
    description: "Assists physician during patient visits and works directly with a Nurse to take vitals as well as medical history."
  },
  {
    id: "exp-2",
    title: "Volunteer",
    organization: "Santa Clara Valley Medical Center",
    type: "Internship",
    date: "Feb 2023 – Present",
    location: "San Jose, California, United States",
    format: "On-site",
    description: "Skills: Interpersonal Communication, Spanish, and +3 skills"
  },
  {
    id: "exp-3",
    title: "Intern",
    organization: "Community College Outreach Program",
    type: "Internship",
    date: "Jun 2023 – Aug 2023 · 3 mos",
    location: "Stanford, California, United States",
    format: "On-site",
    description: "Skills: Research Skills and Data Analysis"
  }
];

export default function Experience() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground">Clinical and research involvement forming the basis of my medical education.</p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12"
              data-testid={`timeline-item-${exp.id}`}
            >
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-1">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-primary font-medium mb-4">
                  <span>{exp.organization}</span>
                  <span className="text-muted-foreground font-normal text-sm px-2 py-0.5 rounded-full bg-secondary">
                    {exp.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 opacity-70" />
                    {exp.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 opacity-70" />
                    {exp.location} <span className="mx-1.5">·</span> {exp.format}
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
