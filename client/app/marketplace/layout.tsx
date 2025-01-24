import { Footer } from "@/components/footer";
import { Header } from "../../components/header";

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        items={[
          { title: "Home", href: "/marketplace" },
          { title: "Categories", href: "/marketplace/categories" },
          { title: "Trending", href: "/marketplace/trending" },
          { title: "What's New", href: "/marketplace/new" },
        ]}
      />
      <main className="flex-1">{children}</main>
      <Footer
        builtBy="Adamay, Sachin"
        builtByLink="https://marketplAIce.servatom.com/"
        githubLink="https://github.com/Sachin1801/marketplAIce/"
      />
    </div>
  );
}