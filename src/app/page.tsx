import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Leadership } from "@/components/sections/leadership";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Separator className="mx-auto max-w-3xl" />
        <Experience />
        <Separator className="mx-auto max-w-3xl" />
        <Leadership />
        <Separator className="mx-auto max-w-3xl" />
        <Skills />
        <Separator className="mx-auto max-w-3xl" />
        <Projects />
        <Separator className="mx-auto max-w-3xl" />
        <Education />
        <Separator className="mx-auto max-w-3xl" />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
