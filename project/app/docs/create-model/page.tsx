export default function CreateModelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Create a Model Version
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Learn how to create and version your AI models for the marketplace.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Model Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Model Architecture</li>
          <li>Performance Metrics</li>
          <li>Resource Requirements</li>
          <li>Documentation Standards</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Versioning Guidelines
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Version Naming Conventions</li>
          <li>Change Documentation</li>
          <li>Backward Compatibility</li>
          <li>Testing Requirements</li>
        </ul>
      </div>
    </div>
  );
} 