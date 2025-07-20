import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const certifications = [
  {
    name: 'Associate Cloud Engineer (GCP-ACE)',
    issuer: 'Google Cloud',
    description: 'Demonstrates the ability to deploy applications, monitor operations, and manage enterprise solutions.'
  },
  {
    name: 'Professional Cloud Network Engineer (GCP-PCNE)',
    issuer: 'Google Cloud',
    description: 'Showcases expertise in designing, implementing, and managing network architectures in Google Cloud.'
  },
];

export default function Certifications() {
  return (
    <AnimatedSection>
      <section id="certifications" className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Certifications
              </div>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary-foreground">My Credentials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My professional certifications validate my skills and expertise in cloud technologies.
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert.name} className="bg-card border-border/50 flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-left">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
