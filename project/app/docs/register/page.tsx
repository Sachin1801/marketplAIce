export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Register on AI Marketplace
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Learn how to create an account and get started with MarketplAIce.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Registration Process
        </h2>
        <p className="text-muted-foreground">
          Follow these steps to create your MarketplAIce account and start exploring AI models.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Account Types
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Developer Account</li>
          <li>Data Scientist Account</li>
          <li>Enterprise Account</li>
        </ul>
      </div>
    </div>
  );
} 