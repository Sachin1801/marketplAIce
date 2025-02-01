import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built by Adamay, Sachin. The source code is available on GitHub.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yourusername/marketplaice"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </a>
            <Link
              href="/contact"
              className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
