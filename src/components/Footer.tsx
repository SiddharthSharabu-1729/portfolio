import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Siddhartha Sharabu. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/SiddharthSharabu-1729/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/Siddharth-Sharabu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.instagram.com/sid_reborn_350/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:siddharthasharabu@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
