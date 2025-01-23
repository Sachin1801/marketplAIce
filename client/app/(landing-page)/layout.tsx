import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        // items={[
        //   { title: "Home", href: "/" },
        //   { title: "Features", href: "/#features" },
        //   { title: "Pricing", href: "/#pricing" },
        //   { title: "Github", href: "https://github.com/stack-auth/stack-template", external: true },
        // ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Adamay, Sachin"
        builtByLink="https://marketplAIce.servatom.com/"
        githubLink="https://github.com/Sachin1801/marketplAIce/"
        // twitterLink="https://twitter.com/adamay_mann"
        // linkedinLink="https://linkedin.com/in/adamaymann7"
      />
    </div>
  );
}
