import { Card, CardContent } from '@/components/ui/card';
import { Code, ToyBrick, Wrench, Database, Wind, Bot } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const skills = [
  { icon: <Code className="h-8 w-8 text-primary" />, name: 'JavaScript' },
  { icon: <Code className="h-8 w-8 text-primary" />, name: 'TypeScript' },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, name: 'React' },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, name: 'Next.js' },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, name: 'Node.js' },
  { icon: <Wind className="h-8 w-8 text-primary" />, name: 'Tailwind CSS' },
  { icon: <Database className="h-8 w-8 text-primary" />, name: 'Firebase' },
  { icon: <Bot className="h-8 w-8 text-primary" />, name: 'Genkit' },
  { icon: <Wrench className="h-8 w-8 text-primary" />, name: 'Git & GitHub' },
  { icon: <Wrench className="h-8 w-8 text-primary" />, name: 'Docker' },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                My Toolkit
              </div>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary-foreground">Technologies I Love</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of technologies I'm proficient with and the tools I use to bring ideas to life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {skills.map((skill) => (
              <Card key={skill.name} className="group relative flex flex-col items-center justify-center p-6 bg-card border-border/50 hover:bg-accent transition-colors duration-300 transform hover:-translate-y-2">
                <CardContent className="flex flex-col items-center gap-4">
                  {skill.icon}
                  <span className="text-lg font-semibold text-center text-accent-foreground">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
