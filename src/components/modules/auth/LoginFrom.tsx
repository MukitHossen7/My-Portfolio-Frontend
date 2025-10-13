"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLogin } from "@/actions/auth/auth";
import { useRouter } from "next/navigation";

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
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-md"
            >
              <h2 className="text-3xl font-bold text-center">Login</h2>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-2">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
