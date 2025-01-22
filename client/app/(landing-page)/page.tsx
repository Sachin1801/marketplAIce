import { stackServerApp } from "@/stack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="h-[50rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
            Subscribe to our newsletter and join the waitlist
          </h1>
          <p></p>
          <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            A comprehensive marketplace, showcasing the latest advancements in AI 
            for users and developers alike. a platform for discovering, comparing, 
            and exploring AI products, software, and technologies.
          </p>
          <Input
            type="email"
            placeholder="hi@marketAIplace.servatom.com"
            className="w-full mt-4 relative z-10"
          />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}