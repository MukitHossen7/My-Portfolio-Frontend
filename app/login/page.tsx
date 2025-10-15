import { Metadata } from "next";
import LoginFrom from "../../components/modules/auth/LoginFrom";

export const metadata: Metadata = {
  title: "Mukit Hossen - Login | FullStack Developer Portfolio",
  description:
    "Access Mukit Hossen’s portfolio dashboard securely. Log in to manage blogs, projects, and other portfolio content with ease.",
};

const LoginPage = () => {
  return (
    <div>
      <LoginFrom />
    </div>
  );
};

export default LoginPage;
