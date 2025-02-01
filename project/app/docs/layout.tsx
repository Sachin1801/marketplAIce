import { Sidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
      <div className="flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[200px] overflow-y-auto border-r pr-6 md:sticky md:block lg:w-[220px]">
          <Sidebar />
        </aside>
        <main className="relative py-8 px-4">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 