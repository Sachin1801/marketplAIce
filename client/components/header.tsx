"use client";

import { cn } from "@/lib/utils";
import { useStackApp, useUser } from "@stackframe/stack";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
import { ColorModeSwitcher } from "./color-mode-switcher";
import { Logo } from "./logo";
import { Button, buttonVariants } from "./ui/button";

interface NavProps {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
  }[];
}

function SignInSignUpButtons() {
  const app = useStackApp();
  return (
    <>
      <Link
        href={app.urls.signIn}
        className={buttonVariants({ variant: "secondary" })}
      >
        Sign In
      </Link>

      <Link
        href={app.urls.signUp}
        className={buttonVariants({ variant: "default" })}
      >
        Sign Up
      </Link>
    </>
  );
}

function AuthButtonsInner() {
  const user = useUser();

  if (user) {
    return (
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "default" })}
      >
        Dashboard
      </Link>
    );
  } else {
    return <SignInSignUpButtons />;
  }
}

function AuthButtons() {
  return (
    <React.Suspense fallback={<SignInSignUpButtons />}>
      <AuthButtonsInner />
    </React.Suspense>
  );
}

function MobileItems(props: NavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {props.items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.title}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <AuthButtons />
          </div>
        </nav>
      </div>
    </div>
  );
}

function DesktopItems(props: NavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="hidden gap-6 md:flex items-center">
      {/* Discover Dropdown */}
      <div className="relative group">
        <button className="flex items-center text-sm font-medium hover:underline">
          Discover
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/categories">Categories</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/trending">Trending</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/new">What's New</Link>
            </li>
          </ul>
        </div>
      </div>

      {props.items?.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : item.href}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
            item.href.startsWith(`/${segment}`)
              ? "text-foreground"
              : "text-foreground/60",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function Header(props: NavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="fixed w-full z-50 bg-background/80 px-4 md:px-8 backdrop-blur">
      <div className="flex h-18 items-center justify-between py-4">
        {/* Left Side: Logo and Navigation */}
        <div className="flex items-center gap-4 md:gap-10">
          <Logo className="hidden md:flex" />

          {props.items?.length ? <DesktopItems items={props.items} /> : null}

          <Button
            className="space-x-2 md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <Logo className="md:hidden" />

          {showMobileMenu && props.items && <MobileItems items={props.items} />}
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
                {/* Search Input */}
                <input
                type="text"
                placeholder="Search with AI"
                className="w-full px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                {/* Magnifying Glass Icon */}
                <button className="absolute inset-y-0 right-4 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75L21 21m-5.25-5.25a6.75 6.75 0 11-9.5-9.5 6.75 6.75 0 019.5 9.5z"
                    />
                </svg>
                </button>
            </div>
        </div>

        {/* Right Side: Color Mode and Auth Buttons */}
        <div className="flex gap-4 items-center">
          <ColorModeSwitcher />
          <nav className="gap-4 items-center hidden md:flex">
            {/* <AuthButtons /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
