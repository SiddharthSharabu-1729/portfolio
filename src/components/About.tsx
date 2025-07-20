import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate and creative developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to create seamless digital experiences.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next big project.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="A professional portrait"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg aspect-square"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
