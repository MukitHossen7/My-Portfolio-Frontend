import axios from "axios";

export const createLogin = async (loginData: {
  email: string;
  password: string;
}) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
    loginData,
    { withCredentials: true }
  );
  return res.data;
};
