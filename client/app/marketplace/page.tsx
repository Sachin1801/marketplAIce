"use client";

import React from "react";
import { AiCard } from "@/components/ai-card";
import { FilterPanel } from "@/components/filter-panel"

export default function MarketplacePage() {
    const cards = [
        {
        title: "Next.js 14",
        description: "The power of full-stack to the frontend. Read the release notes.",
        },
        {
        title: "AI Tool 1",
        description: "Revolutionize your AI workflows with Tool 1.",
        },
        {
        title: "AI Tool 2",
        description: "Explore cutting-edge features in Tool 2.",
        },
        {
        title: "AI Tool 3",
        description: "A tool designed for seamless AI integration.",
        },
    ];

  return (
    <div className="flex gap-6 p-6">

      <div className="flex-shrink-0">

        <FilterPanel />
      </div>


      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <AiCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}