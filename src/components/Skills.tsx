import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Container, GitBranch, Layers, Server, Terminal, Workflow, Code, Brain } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const skills = [
  { icon: <Cloud className="h-8 w-8 text-primary" />, name: 'GCP' },
  { icon: <Container className="h-8 w-8 text-primary" />, name: 'Docker' },
  { icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary fill-current"><title>Kubernetes</title><path d="M13.79 5.39a3.1 3.1 0 0 0-3.58 0L5.39 8.21a3.1 3.1 0 0 0-.9 2.2v6.38c0 .88.36 1.73.97 2.28l4.82 3.52a3.1 3.1 0 0 0 3.6 0l4.82-3.52c.6-.55.97-1.4.97-2.28V10.4c0-.88-.36-1.73-.97-2.28L13.8 5.4zm-.58 1.15a1.9 1.9 0 0 1 2.18 0l4.82 2.82c.38.21.6.6.6 1.05v6.38c0 .54-.22.93-.6 1.15L15.4 20.4a1.9 1.9 0 0 1-2.18 0L8.4 17.58c-.38-.21-.6-.6-.6-1.05V10.4c0-.54.22-.93.6-1.15l4.82-2.82zM12 11.12a.88.88 0 0 0-.88.88v.29h1.76v-.29a.88.88 0 0 0-.88-.88zm-.29 2.07v-1.19h.58v1.19a.29.29 0 1 1-.58 0zm.29.87a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76zm0 .97a.29.29 0 1 1 0-.58.29.29 0 0 1 0 .58zm.6.29a.88.88 0 1 0 1.76 0 .88.88 0 0 0-1.76 0zm.88-.3a.29.29 0 1 1-.58 0 .29.29 0 0 1 .58 0zm-1.5 0a.88.88 0 1 0 0-1.76.88.88 0 0 0 0 1.76zm-.29-.88a.29.29 0 1 1 0 .58.29.29 0 0 1 0-.58zm.3-1.47v.6h.58v-.6a.29.29 0 1 1 .58 0v.6h.29a.88.88 0 1 0 0-1.76h-.87v1.16zm.87-.58h-.29v.58h.29a.29.29 0 1 1 0 .58v.3h-.58v-.3a.29.29 0 1 1-.58 0v-.88a.88.88 0 1 0-1.76 0v2.06h1.18v.29a.29.29 0 1 1-.58 0v-.29h-1.2v1.18h.01a.88.88 0 1 0 1.75 0h-0.01v-.58h.3a.29.29 0 1 1 .58 0v.58h.87a.88.88 0 1 0 0-1.76h-.87v-.58h.29a.29.29 0 1 1 .58 0v.58h.59a.88.88 0 1 0 0-1.76h-2.06v-1.18h.29a.29.29 0 1 1 .58 0v1.18h1.18a.88.88 0 1 0 0-1.76h-1.18v.3a.29.29 0 1 1-.58 0v-.3z"/></svg>, name: 'Kubernetes' },
  { icon: <Terminal className="h-8 w-8 text-primary" />, name: 'Linux' },
  { icon: <Layers className="h-8 w-8 text-primary" />, name: 'Terraform' },
  { icon: <Code className="h-8 w-8 text-primary" />, name: 'Python' },
  { icon: <Brain className="h-8 w-8 text-primary" />, name: 'AI/ML' },
  { icon: <Code className="h-8 w-8 text-primary" />, name: 'Bash' },
  { icon: <Code className="h-8 w-8 text-primary" />, name: 'HTML' },
  { icon: <GitBranch className="h-8 w-8 text-primary" />, name: 'Git & GitHub' },
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
                A collection of technologies I'm proficient with and the tools I use to build and manage robust infrastructure.
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
