export default function RegistrationProcessPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Registration Process
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Detailed guide on the registration process for developers.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Steps to Register
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Create an account</li>
          <li>Verify your email</li>
          <li>Complete your profile</li>
          <li>Choose your subscription plan</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Required Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Basic Information</li>
          <li>Development Environment</li>
          <li>Project Details</li>
          <li>Usage Requirements</li>
        </ul>
      </div>
    </div>
  );
} 