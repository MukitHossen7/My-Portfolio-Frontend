"use client";

import { useEffect, useRef } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Globe,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { gsap } from "gsap";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Character reveal animation
      gsap.from(".reveal-char", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
      });

      // Mouse tracking spotlight
      const moveSpotlight = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gsap.to(spotlightRef.current, {
          x: clientX,
          y: clientY,
          duration: 1.2,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", moveSpotlight);

      // Stagger entrance for other items
      gsap.from(".stagger-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("access_key", "07e7c3eb-9ada-4328-b749-95500ea1045c");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message transmitted successfully.");
        form.reset();
      }
    } catch (error) {
      toast.error("Transmission failed.");
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#020617] min-h-screen w-full flex items-center justify-center py-16 overflow-hidden selection:bg-cyan-500 selection:text-black"
    >
      {/* Interactive Spotlight */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 w-full relative z-10">
        {/* lg:grid-cols-2 ensures EXACT 50/50 SPLIT */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* LEFT SIDE (50%) */}
          <div className="space-y-12">
            <div className="space-y-6 overflow-hidden">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter text-white">
                <span className="inline-block reveal-char">LET&apos;S</span>{" "}
                <br />
                <span className="inline-block reveal-char bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent">
                  CONNECT.
                </span>
              </h1>
              <p className="stagger-item text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                I help brands build high-end digital experiences. Ready to turn
                your vision into reality?
              </p>
            </div>

            <div className="stagger-item space-y-8 border-t border-slate-800 pt-10">
              {[
                { label: "Email", value: "hossenmukit7@gmail.com", icon: Mail },
                { label: "Phone", value: "01326153447", icon: Phone },
                {
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  icon: Globe,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <span className="text-lg md:text-xl text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-slate-600 group-hover:text-cyan-400 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="stagger-item flex gap-8 items-center text-slate-500">
              <a
                href="https://github.com/MukitHossen7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github size={26} strokeWidth={1.5} />
              </a>
              <a
                href="www.linkedin.com/in/mukithossen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={26} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (50%) - Form takes full half width */}
          <div className="stagger-item w-full relative group">
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 xl:p-16 rounded-[2.5rem] shadow-2xl w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 gap-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[11px] uppercase tracking-[0.3em] text-slate-500 font-black">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              placeholder="YOUR NAME"
                              className="w-full bg-transparent border-b border-slate-800 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all text-lg font-medium"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[11px] uppercase tracking-[0.3em] text-slate-500 font-black">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              placeholder="EMAIL@DOMAIN.COM"
                              className="w-full bg-transparent border-b border-slate-800 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all text-lg font-medium"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[11px] uppercase tracking-[0.3em] text-slate-500 font-black">
                            Message
                          </FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              placeholder="HOW CAN I HELP YOU?"
                              className="w-full bg-transparent border-b border-slate-800 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500 transition-all text-lg font-medium h-32 resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-20 bg-white text-black hover:bg-cyan-500 hover:text-black font-black text-xs uppercase tracking-[0.4em] rounded-full transition-all flex items-center justify-center gap-4 relative overflow-hidden shadow-xl"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Send Message <Send size={18} />
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
