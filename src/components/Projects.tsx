'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'The Deck Linux',
    description: 'A custom open-source Linux flavor for the BeagleBoard AI single-board computer.',
    longDescription: 'As part of my internship, I developed The Deck Linux, a specialized Linux distribution for the BeagleBoard AI. This project showcases my ability to create a tailored OS from the ground up. You can find the source code on SourceForge.',
    image: 'https://i.imgur.com/eJpE54s.png',
    tags: ['Linux', 'Open Source', 'BeagleBoard AI', 'Embedded Systems'],
    hint: 'web application'
  },
  {
    title: 'Face and Voice Recognition',
    description: 'A proof-of-concept for a biometric security system using a Raspberry Pi.',
    longDescription: 'This project explores the intersection of hardware and software, using a Raspberry Pi and OpenCV to create a functional face and voice recognition system. It demonstrates my skills in AI and embedded systems.',
    image: 'https://i.imgur.com/jC4z2T6.jpeg',
    tags: ['Raspberry Pi', 'OpenCV', 'AI', 'Biometrics'],
    hint: 'dashboard analytics'
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'A highly accurate AI model for recognizing handwritten digits.',
    longDescription: 'I built and trained an AI model using Python and Keras that achieves 99.5% accuracy in recognizing handwritten digits. This project highlights my expertise in machine learning and data processing.',
    image: '/images/sV20pW1.png',
    tags: ['AI', 'Python', 'Keras', 'Machine Learning'],
    hint: 'fitness app'
  },
];

export default function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                My Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary-foreground">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of projects that showcase my passion for creating meaningful digital solutions.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-12">
            {projects.map((project) => (
              <Dialog key={project.title}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full bg-card border-border/50">
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={project.hint}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold font-headline mb-2 text-primary-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-base mb-4 flex-grow">{project.description}</p>
                       <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                       </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl bg-card border-border/50 p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-full">
                       <Image src={project.image} alt={project.title} fill className="object-cover rounded-l-lg" data-ai-hint={project.hint} />
                    </div>
                    <div className="p-8 flex flex-col">
                      <DialogHeader>
                        <DialogTitle className="font-headline text-3xl mb-2">{project.title}</DialogTitle>
                        <div className="flex flex-wrap gap-2 py-2">
                          {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <DialogDescription className="text-base text-muted-foreground pt-4 flex-grow">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex gap-4 mt-6">
                        <Button>Live Demo <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        <Button variant="secondary">
                           <a href="https://sourceforge.net/u/siddharth-1729/" target="_blank" rel="noopener noreferrer" aria-label="SourceForge">
                           <Github className="mr-2 h-4 w-4" /> Code
                           </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
