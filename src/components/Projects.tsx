'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative e-commerce platform with a focus on user experience and performance.',
    longDescription: 'Project Alpha redefines online shopping with a blazingly fast interface, personalized recommendations, and a seamless checkout process. Built with Next.js, TypeScript, and Stripe integration.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    hint: 'web application'
  },
  {
    title: 'Project Beta',
    description: 'A social media dashboard for content creators to manage their online presence.',
    longDescription: 'This dashboard provides creators with analytics, scheduling tools, and content management features across multiple platforms. The tech stack includes React, Firebase, and Chart.js.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Analytics'],
    hint: 'dashboard analytics'
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first application for tracking personal fitness goals and progress.',
    longDescription: 'Gamifying fitness, this app encourages users to stay active with challenges, leaderboards, and social sharing. Developed using React Native and a Node.js backend.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Node.js', 'Mobile'],
    hint: 'fitness app'
  },
  {
    title: 'Project Delta',
    description: 'A real-time collaborative code editor for remote teams and pair programming.',
    longDescription: 'Featuring live sharing, syntax highlighting for multiple languages, and integrated chat. Built with WebSockets, Monaco Editor, and Express.',
    image: 'https://placehold.co/600x400.png',
    tags: ['WebSockets', 'Real-time', 'Collaboration'],
    hint: 'code editor'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl text-primary">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on. Each one represents a challenge I was excited to tackle.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
          {projects.map((project) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                    data-ai-hint={project.hint}
                  />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                     <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                     </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px] bg-secondary">
                <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full max-h-64 rounded-t-lg" data-ai-hint={project.hint} />
                <DialogHeader className="p-6">
                  <DialogTitle className="font-headline text-3xl">{project.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                  <DialogDescription className="text-base text-muted-foreground pt-4">
                    {project.longDescription}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
