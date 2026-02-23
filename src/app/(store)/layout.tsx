import Header  from "@/shared/components/header";
import Footer from "@/shared/components/footer";


export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}