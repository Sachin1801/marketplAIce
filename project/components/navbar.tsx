"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Bot, ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span className="font-bold">MarketplAIce</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="flex items-center gap-1">
                Discover <ChevronDown className="h-4 w-4" />
              </Button>
              <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                Categories
              </Link>
              <Link href="/trending" className="text-sm font-medium transition-colors hover:text-primary">
                Trending
              </Link>
              <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
                Documentation
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search with AI"
                className="pl-8 w-[300px] bg-secondary"
              />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}