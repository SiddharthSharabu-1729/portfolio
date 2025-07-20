import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const education = [
  {
    institution: 'BITS Pilani (WILP)',
    degree: 'M.Tech in AI & ML',
    period: '2025 - Present',
    description: 'Currently pursuing a Master\'s degree to deepen my expertise in Artificial Intelligence and Machine Learning through the Work Integrated Learning Program.'
  },
  {
    institution: 'SVR Engineering College',
    degree: 'B.Tech in Electrical and Electronics Engineering',
    period: '2019 - 2022',
    description: 'Graduated with a Bachelor of Technology, specializing in Electrical and Electronics Engineering.'
  },
  {
    institution: 'ESC Govt Polytechnic College',
    degree: 'Diploma in Electrical and Electronics Engineering',
    period: '2016 - 2019',
    description: 'Completed a comprehensive diploma program, building a strong foundation in electrical and electronics principles.'
  },
  {
    institution: 'Sri Guru Raja E.M School',
    degree: 'High School',
    period: '2015 - 2016',
    description: 'Completed my high school education, preparing me for my future studies in technology and engineering.'
  },
];

export default function Education() {
  return (
    <AnimatedSection>
      <section id="education" className="w-full py-24 md:py-32 lg:py-40 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Education
              </div>
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary-foreground">My Academic Background</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My academic journey laid the groundwork for my career in technology and engineering.
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {education.map((edu) => (
              <Card key={edu.institution} className="bg-card border-border/50 flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="font-headline text-xl">{edu.institution}</CardTitle>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-left">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
