export default function ModelSubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Model Subscription
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Learn how to subscribe to AI models and manage your subscriptions effectively.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Subscription Types
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Pay-as-you-go</li>
          <li>Monthly subscription</li>
          <li>Enterprise plans</li>
          <li>Custom solutions</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Managing Subscriptions
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Viewing active subscriptions</li>
          <li>Upgrading plans</li>
          <li>Usage monitoring</li>
          <li>Billing and invoices</li>
        </ul>
      </div>
    </div>
  );
} 