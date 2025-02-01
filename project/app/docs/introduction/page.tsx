export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Learn about MarketplAIce, its features, and how it can help you find the perfect AI models for your needs.
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What is MarketplAIce?
        </h2>
        <p className="text-muted-foreground">
          MarketplAIce is a comprehensive platform designed to help developers, researchers, and businesses discover, compare, and integrate AI models into their applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Comprehensive model comparison</li>
          <li>Easy integration guides</li>
          <li>Performance metrics and benchmarks</li>
          <li>Cost analysis and optimization</li>
        </ul>
      </div>
    </div>
  );
} 