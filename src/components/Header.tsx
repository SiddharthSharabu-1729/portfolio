'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-end px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <span className="font-bold text-xl font-headline text-primary">Siddhartha Sharabu</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex mr-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="/Siddharth's-RESUME.pdf" download className="hidden md:block mr-4">
            <Button variant="outline">Download Resume</Button>
          </a>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                 <div className="flex justify-between items-center mb-6">
                   <Link href="/" onClick={() => setIsOpen(false)}>
                      <span className="font-bold text-xl font-headline text-primary">Siddhartha Sharabu</span>
                   </Link>
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                 </div>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <Link href={link.href} className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary transition-colors">
                         {link.label}
                       </Link>
                    </SheetClose>
                  ))}
                  <a href="/Siddharth's-RESUME.pdf" download>
                    <Button variant="default" className="w-full">Download Resume</Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
