import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
import { Toaster } from "../../components/ui/sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617]">
      <Toaster richColors />
      <Navbar />
      <main className="grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
