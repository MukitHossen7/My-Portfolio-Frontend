// import { cookies } from "next/headers";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { redirect } from "next/navigation";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../../components/ui/sidebar";
import { AppSidebar } from "../../../components/shared/Sidebar";
import { Toaster } from "../../../components/ui/sonner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const cookieStore = await cookies();
  // const token = cookieStore.get("token")?.value;
  // console.log(token);
  // if (!token) {
  //   redirect("/login");
  // }

  // let decodedRole: JwtPayload | null = null;
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  //   if (typeof decoded === "object" && decoded !== null) {
  //     decodedRole = decoded as JwtPayload;
  //   } else {
  //     redirect("/login");
  //   }
  // } catch (err) {
  //   console.log(err);
  //   redirect("/login");
  // }

  // if (!decodedRole || decodedRole.role !== "ADMIN") {
  //   redirect("/login");
  // }

  return (
    <div className="bg-[#020617]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-[#020617] text-gray-200  border-gray-800">
            <SidebarTrigger className="-ml-1" />
          </header>
          <div className="flex flex-1 flex-col bg-[#020617]">
            {children}
            <Toaster richColors />
            {/* <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
