"use client";

import { FaLinkedin, FaEnvelope, FaCode, FaGithub } from "react-icons/fa";
import OrbitSkillsCircle from "./OrbitSkillsCircle";

export default function BannerSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left Side */}
        <div>
          <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm mb-4">
            👋 Hey there!
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Vigneshwaran B
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">
            Cloud & DevOps Engineer 🌍
          </h2>
          <p className="text-gray-300 mb-6">
            I love learning new technologies and building solutions that make a
            difference. Thanks for visiting my portfolio!{" "}
            <span className="text-yellow-400 font-semibold">
              Happy coding..! 💻
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition"
            >
              My Resume ⬇
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaCode />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side (Skills Circle with Animation) */}

        <OrbitSkillsCircle />
      </div>
    </section>
  );
}
