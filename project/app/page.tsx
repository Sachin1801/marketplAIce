"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Cpu, FileCode, MessageSquare, Music, Pencil, Robot, Sparkles, Video, Wand2, Zap } from "lucide-react";

const models = [
  {
    name: "GPT-4 Turbo",
    description: "Most capable model, best for complex tasks",
    price: "$0.01/1K tokens",
    features: ["Complex reasoning", "Advanced coding", "Creative writing"],
    speed: 95,
    accuracy: 98,
    icon: Brain,
    category: "language"
  },
  {
    name: "Claude 3 Opus",
    description: "Balanced performance and efficiency",
    price: "$0.008/1K tokens",
    features: ["Document analysis", "Detailed responses", "Research"],
    speed: 90,
    accuracy: 96,
    icon: Sparkles,
    category: "language"
  },
  {
    name: "Gemini Pro",
    description: "Google's advanced language model",
    price: "$0.0025/1K tokens",
    features: ["Multimodal understanding", "Code generation", "Data analysis"],
    speed: 92,
    accuracy: 95,
    icon: MessageSquare,
    category: "language"
  },
  {
    name: "Stable Diffusion XL",
    description: "High-quality image generation",
    price: "$0.002/image",
    features: ["Photorealistic", "Art styles", "Fast generation"],
    speed: 85,
    accuracy: 92,
    icon: Wand2,
    category: "image"
  },
  {
    name: "Midjourney V6",
    description: "Professional-grade image creation",
    price: "$0.14/image",
    features: ["Hyperrealistic", "Advanced composition", "Style control"],
    speed: 88,
    accuracy: 96,
    icon: Pencil,
    category: "image"
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's advanced image generator",
    price: "$0.04/image",
    features: ["Precise prompting", "Artistic accuracy", "Brand design"],
    speed: 90,
    accuracy: 94,
    icon: Cpu,
    category: "image"
  },
  {
    name: "Suno AI",
    description: "Advanced music generation",
    price: "$0.10/song",
    features: ["Multiple genres", "Full compositions", "Voice synthesis"],
    speed: 85,
    accuracy: 90,
    icon: Music,
    category: "audio"
  },
  {
    name: "AudioCraft",
    description: "Meta's audio generation model",
    price: "$0.05/audio",
    features: ["Sound effects", "Music creation", "Voice cloning"],
    speed: 82,
    accuracy: 88,
    icon: Music,
    category: "audio"
  },
  {
    name: "Runway Gen-2",
    description: "Professional video generation",
    price: "$0.50/video",
    features: ["Text to video", "Video editing", "Special effects"],
    speed: 75,
    accuracy: 85,
    icon: Video,
    category: "video"
  },
  {
    name: "Pika Labs",
    description: "Real-time video synthesis",
    price: "$0.40/video",
    features: ["Animation", "Character motion", "Scene generation"],
    speed: 78,
    accuracy: 87,
    icon: Video,
    category: "video"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programming assistant",
    price: "$10/month",
    features: ["Code completion", "Documentation", "Bug detection"],
    speed: 95,
    accuracy: 92,
    icon: FileCode,
    category: "code"
  },
  {
    name: "Amazon CodeWhisperer",
    description: "AWS code generation tool",
    price: "$8/month",
    features: ["Security scanning", "Code suggestions", "AWS integration"],
    speed: 92,
    accuracy: 90,
    icon: FileCode,
    category: "code"
  },
  {
    name: "AutoGPT",
    description: "Autonomous AI agent for task completion",
    price: "$15/month",
    features: ["Task automation", "Self-improving", "Goal-oriented"],
    speed: 88,
    accuracy: 92,
    icon: Robot,
    category: "agent"
  },
  {
    name: "BabyAGI",
    description: "Task management AI system",
    price: "$10/month",
    features: ["Task prioritization", "Resource management", "Learning capability"],
    speed: 85,
    accuracy: 90,
    icon: Brain,
    category: "agent"
  },
  {
    name: "AgentGPT",
    description: "Customizable AI agents for specific tasks",
    price: "$20/month",
    features: ["Custom workflows", "API integration", "Multi-agent collaboration"],
    speed: 90,
    accuracy: 94,
    icon: Robot,
    category: "agent"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            AI Model Marketplace
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare and choose the perfect AI model for your needs. From language processing to autonomous agents, find the ideal balance of performance and cost.
          </p>
        </div>

        <Tabs defaultValue="language" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 mb-8">
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="agent">Agents</TabsTrigger>
          </TabsList>

          {["language", "image", "audio", "video", "code", "agent"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models
                  .filter(model => model.category === category)
                  .map((model, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <model.icon className="h-6 w-6 text-primary" />
                          <CardTitle>{model.name}</CardTitle>
                        </div>
                        <CardDescription>{model.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Speed</span>
                              <span className="text-sm font-medium">{model.speed}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${model.speed}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">
                                {category === "image" ? "Quality" : "Accuracy"}
                              </span>
                              <span className="text-sm font-medium">{model.accuracy}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${model.accuracy}%` }}
                              />
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {model.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Zap className="h-4 w-4 text-primary" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-4">
                        <div className="text-lg font-semibold text-primary">
                          {model.price}
                        </div>
                        <Button className="w-full">
                          {category === "image" ? "Generate Images" :
                           category === "audio" ? "Create Audio" :
                           category === "video" ? "Generate Video" :
                           category === "code" ? "Start Coding" :
                           category === "agent" ? "Deploy Agent" :
                           "Try Now"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}