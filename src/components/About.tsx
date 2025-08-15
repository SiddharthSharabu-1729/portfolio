import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from './ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="w-full py-24 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="relative h-[400px] w-full lg:h-[500px]">
                <Image
                    src="/images/me-1.jpeg"
                    alt="About Me"
                    fill
                    className="object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    data-ai-hint="professional portrait"
                />
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary-foreground">Driven by Innovation and Efficiency</h2>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                I am a Cloud & Systems Engineer with 3 years of experience in cloud-native deployments, infrastructure automation, and scalable system design. Alongside my expertise in GCP, Kubernetes, and DevOps, I have strong knowledge in AI/ML, including Generative AI (OpenAI, Google Gemini), LLM integration, and multi-agent orchestration—gained through academic and personal projects. I’m currently pursuing my M.Tech in AI & Machine Learning at BITS Pilani to deepen my skills in intelligent automation and advanced AI systems.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                I am a quick learner, adaptable to new technologies, and committed to providing effective resolutions that align with client needs. I have hands-on experience in networking and optimizing IT infrastructure for efficiency.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                 <Link href="#contact">
                    <Button size="lg">Get in Touch</Button>
                 </Link>
                 <Link href="#projects">
                    <Button size="lg" variant="secondary">View My Work</Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
