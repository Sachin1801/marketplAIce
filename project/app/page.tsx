"use client";

import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SubscribeForm } from "@/components/SubscribeForm";
import axios from "axios";

export default function IndexPage() {
  const [message, setMessage] = useState("");

  const handleSubscribe = async (email: string, name: string) => {
    try {
      const response = await axios.post("http://localhost:8000/api/subscriptions/subscribe", { email, name });
      console.log("API response:", response); // Log the response
      if (response.status === 200) {
        return { success: true };
      } else {
        console.error("Subscription failed:", response.data); // Log the error data
        return { success: false, error: "Subscription failed. Please try again." };
      }
    } catch (error) {
      console.error("API error:", error); // Log the error
      return { success: false, error: "An error occurred. Please try again." };
    }
  };

  return (
    <>
      <div className="h-[50rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
            Subscribe to our newsletter and join the waitlist
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            A comprehensive marketplace, showcasing the latest advancements in AI 
            for users and developers alike. a platform for discovering, comparing, 
            and exploring AI products, software, and technologies.
          </p>
          <SubscribeForm onSubscribe={handleSubscribe} />
          {message && <p className="mt-2 text-center">{message}</p>}
        </div>
      </div>
    </>
  );
}