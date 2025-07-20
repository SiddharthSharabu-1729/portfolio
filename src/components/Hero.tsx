import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="w-full py-32 md:py-48 lg:py-56">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter font-headline sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-primary-foreground">
                Siddhartha Achari Sharabu
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                As a Systems Engineer, I architect and manage robust, scalable IT infrastructure by leveraging deep expertise in cloud technologies, Linux, and container orchestration.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="#contact">
                <Button size="lg">Contact Me</Button>
              </Link>
              <Link href="#projects">
                <Button size="lg" variant="secondary">
                  My Work
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/SiddharthSharabu-1729/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Github className="h-6 w-6" />
                    </Button>
                </a>
                <a href="https://linkedin.com/in/Siddharth-Sharabu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                    </Button>
                </a>
                <a href="https://www.instagram.com/sid_reborn_350/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                    </Button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
