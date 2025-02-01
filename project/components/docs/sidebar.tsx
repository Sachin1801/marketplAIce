"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Bot,
  FileText,
  Users,
  Code,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const sidebarItems = [
  {
    title: "General Overview",
    items: [
      {
        title: "AI Marketplace Documents",
        href: "/docs",
        icon: FileText,
      },
      {
        title: "Introduction",
        href: "/docs/introduction",
        icon: BookOpen,
      },
      {
        title: "Register on AI Marketplace",
        href: "/docs/register",
        icon: Users,
      },
    ],
  },
  {
    title: "Developer Docs",
    items: [
      {
        title: "Registration Process",
        href: "/docs/registration-process",
        icon: FileText,
      },
      {
        title: "Model Subscription",
        href: "/docs/model-subscription",
        icon: Bot,
      },
      {
        title: "Model Usage",
        href: "/docs/model-usage",
        icon: Code,
      },
      {
        title: "Test the API Endpoints",
        href: "/docs/api-endpoints",
        icon: Code,
      },
    ],
  },
  {
    title: "Data Scientist Docs",
    items: [
      {
        title: "Create a Model Version",
        href: "/docs/create-model",
        icon: Bot,
      },
      {
        title: "Deploy Model",
        href: "/docs/deploy-model",
        icon: Code,
      },
      {
        title: "Test Endpoint",
        href: "/docs/test-endpoint",
        icon: Code,
      },
      {
        title: "Publish the Model",
        href: "/docs/publish-model",
        icon: Bot,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full py-6 lg:py-8">
      <div className="space-y-6">
        {sidebarItems.map((section) => (
          <div key={section.title} className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">
              {section.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "transparent"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 