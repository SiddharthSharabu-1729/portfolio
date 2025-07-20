import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, ToyBrick, Wrench } from 'lucide-react';

const skills = {
  'Languages': {
    icon: <Code className="h-6 w-6 text-primary" />,
    list: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/SCSS', 'SQL', 'NoSQL (Firebase/MongoDB)'],
  },
  'Frameworks & Libraries': {
    icon: <ToyBrick className="h-6 w-6 text-primary" />,
    list: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'ShadCN UI', 'Zod'],
  },
  'Tools & Platforms': {
    icon: <Wrench className="h-6 w-6 text-primary" />,
    list: ['Git & GitHub', 'Docker', 'Vercel', 'Firebase', 'Figma', 'Postman'],
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl text-primary">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies I'm proficient with and the tools I use to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {Object.entries(skills).map(([category, { icon, list }]) => (
            <Card key={category} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {icon}
                <CardTitle className="font-headline text-2xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-base py-1 px-3">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
