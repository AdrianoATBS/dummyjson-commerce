import Header  from "@/shared/components/header";
import Footer from "@/shared/components/footer";
import "@/app/globals.css";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}