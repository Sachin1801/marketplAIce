export default function ApiEndpointsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Test the API Endpoints
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Learn how to test and interact with our API endpoints effectively.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Available Endpoints
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Authentication Endpoints</li>
          <li>Model Inference Endpoints</li>
          <li>Management Endpoints</li>
          <li>Monitoring Endpoints</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Testing Tools
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>API Documentation</li>
          <li>Postman Collections</li>
          <li>Testing Environment</li>
          <li>Sample Requests</li>
        </ul>
      </div>
    </div>
  );
} 