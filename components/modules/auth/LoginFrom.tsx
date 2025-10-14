"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { createLogin } from "../../../actions/auth/auth";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, {
    error: "password is short!",
  }),
});

const LoginFrom = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const loginData = {
        email: values.email,
        password: values.password,
      };
      const result = await createLogin(loginData);
      if (result.success) {
        toast.success("Logged In Successful");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#020617] px-4 lg:px-10">
      <div className="space-y-6 border border-gray-800 w-full max-w-md bg-[#020617] p-8 rounded-lg shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center">
              Login
            </h2>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-[#020617] border-gray-800 text-gray-100  placeholder-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="bg-[#020617] border-gray-800 text-gray-100  placeholder-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant="outline"
              type="submit"
              className="w-full mt-2 text-gray-900"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginFrom;
