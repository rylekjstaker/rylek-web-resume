"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [glowVisible, setGlowVisible] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current?.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    glowRef.current?.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setGlowVisible(true)}
      onMouseLeave={() => setGlowVisible(false)}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--accent-brand-soft), transparent 70%)",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: glowVisible ? 1 : 0,
          background:
            "radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 50%), var(--accent-brand-soft), transparent 70%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-brand"
      >
        {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl"
      >
        {profile.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-6 max-w-lg text-balance text-muted-foreground"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button
          size="lg"
          nativeButton={false}
          render={<a href={profile.resumePdf} download />}
        >
          <Download className="mr-1.5 size-4" />
          Download Resume
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<a href={profile.github} target="_blank" rel="noreferrer" />}
        >
          <GithubIcon className="mr-1.5 size-4" />
          GitHub
        </Button>
        <Button
          size="lg"
          variant="ghost"
          nativeButton={false}
          render={<a href="#contact" />}
        >
          <Mail className="mr-1.5 size-4" />
          Contact
        </Button>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
