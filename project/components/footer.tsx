import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <Link
            href="https://github.com/yourusername"
            className="font-medium underline underline-offset-4"
          >
            Your Name
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/yourusername/project"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        <Link
          href="https://github.com/yourusername/project"
          className="flex items-center gap-2"
        >
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}