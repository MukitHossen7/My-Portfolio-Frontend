import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
