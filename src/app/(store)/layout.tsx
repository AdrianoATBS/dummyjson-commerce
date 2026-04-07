import Header  from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import "@/app/globals.css";

type Props = {
  children: React.ReactNode;
}

export default function StoreLayout({ children }: Props) {
  return (
    <>
      <Header />
        <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}