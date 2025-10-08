import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/types";
import { CalendarDays, Mail, ShieldCheck, User } from "lucide-react";
import Image from "next/image";

const user: IUser = {
  id: 1,
  name: "Mukit Hossen",
  email: "hossenmukit7@gmail.com",
  role: "ADMIN",
  picture:
    "https://i.pinimg.com/564x/6a/6b/72/6a6b72a2d5a5154b1ab70e341bff7dca.jpg",
  isStatus: "ACTIVE",
  isVerified: true,
  createdAt: "2025-09-28T09:42:14.542Z",
};

const DashboardHomePage = () => {
  return (
    <div className="bg-[#020617] min-h-svh flex justify-center items-center">
      <Card className="w-full max-w-md  bg-[#020617] border border-gray-800 shadow-xl rounded-xl py-6">
        <CardHeader className="flex flex-col items-center gap-3 text-center">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-700 shadow-md">
            <Image
              src={
                user?.picture ||
                "https://i.pinimg.com/564x/6a/6b/72/6a6b72a2d5a5154b1ab70e341bff7dca.jpg"
              }
              alt={user?.name}
              fill
              className="object-cover"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl font-semibold text-gray-100">
            {user?.name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`${
              user.isStatus === "ACTIVE"
                ? "border-green-500 text-green-400"
                : "border-red-500 text-red-400"
            } text-xs px-3 py-[2px] rounded-full`}
          >
            {user?.isStatus}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{user?.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{user?.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck
              className={`w-4 h-4 ${
                user?.isVerified ? "text-green-400" : "text-red-400"
              }`}
            />
            <span className="text-gray-300">
              {user?.isVerified ? "Verified Account" : "Unverified"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">
              Joined on {new Date(user?.createdAt).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHomePage;
