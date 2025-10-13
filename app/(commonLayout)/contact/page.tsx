"use client";

import { useState } from "react";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { BorderBeam } from "../../../components/ui/border-beam";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative bg-[#020617] min-h-screen px-4 py-12 max-w-7xl mx-auto lg:px-0">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-100 mb-2">
          Get in Touch
        </h2>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col gap-1">
            <div className="w-24 h-[3px] bg-cyan-500 rounded-full mr-16"></div>
            <div className="w-16 h-[3px] bg-purple-500 rounded-full "></div>
          </div>
        </div>
        <p className="text-gray-300 max-w-xl mx-auto">
          I’d love to hear from you! Whether you have a question or just want to
          say hello, feel free to drop a message.
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <Card className="relative bg-[#020617] py-5 shadow-md border border-gray-800">
          <BorderBeam duration={6} size={150} className="via-cyan-500" />
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-gray-100">
              Contact Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300 mt-4">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-500" />
              <span>hossenmukit7@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-500" />
              <span>+880 1326153447</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-500" />
              <span>Rajshahi, Bangladesh</span>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-[#020617]  shadow-md border border-gray-800 py-5">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-100">
              Send Message
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#020617] text-gray-100 border-gray-800 border  "
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#020617] text-gray-100 border-gray-800"
              />
              <Textarea
                placeholder="Your Message"
                required
                className="bg-[#020617] text-gray-100 border-gray-800 min-h-[150px]"
              />
              <Button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-gray-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
