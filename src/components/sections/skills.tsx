"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="space-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer(0.05)}
            transition={{ delayChildren: i * 0.1 }}
          >
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <motion.div key={skill} variants={fadeInUp} transition={{ duration: 0.4 }}>
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
