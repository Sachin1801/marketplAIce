import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface SubscribeFormProps {
  onSubscribe: (email: string, name: string) => Promise<{ success: boolean; error?: string }>;
}

export function SubscribeForm({ onSubscribe }: SubscribeFormProps) {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    status: "idle" as FormStatus,
    message: "",
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, status: "loading", message: "" }));

    try {
      const result = await onSubscribe(formState.email, formState.name);
      if (!result.success) {
        setFormState((prev) => ({
          ...prev,
          status: "error",
          message: result.error || "",
        }));
      } else {
        setFormState({
          email: "",
          name: "",
          status: "success",
          message: "Thanks for subscribing!",
        });
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter your name"
        value={formState.name}
        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
        required
        className="mb-2"
        disabled={isLoading}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        value={formState.email}
        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
        required
        className="mb-2"
        disabled={isLoading}
      />
      <Button type="submit" className="group relative" disabled={isLoading} data-loading={isLoading}>
        <span className={cn("inline-flex items-center", isLoading && "text-transparent")}>
          Subscribe
          <ArrowRight className="-me-1 ms-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircle className="animate-spin" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        )}
      </Button>
      {formState.message && (
        <p className={cn("mt-2 text-xs", formState.status === "error" ? "text-destructive" : "text-muted-foreground")} role="alert" aria-live="polite">
          {formState.message}
        </p>
      )}
    </form>
  );
}