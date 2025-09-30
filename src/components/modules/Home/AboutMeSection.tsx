"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { SpinningText } from "@/components/ui/spinning-text";

const AboutMeSection = () => {
  return (
    <section className="relative py-16 md:py-20 flex items-center justify-center   text-white">
      <div className="container mx-auto px-2 md:px-4 max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  gap-12">
          {/* Left Section - Image with SpinningText */}
          <div className="relative flex-shrink-0 w-64 h-64 md:w-90 md:h-90 rounded-full flex items-center justify-center p-2 mx-auto md:mx-0">
            {/* Spinning text around image */}
            <SpinningText
              reverse
              radius={13}
              duration={12}
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5)",
              }}
              className="absolute inset-0  text-white text-xl md:text-2xl font-bold"
            >
              hire me • hire me • hire me •
            </SpinningText>

            {/* Center image */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden z-10">
              <Image
                src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto"
                alt="Profile Picture"
                width={256}
                height={256}
                className="object-cover w-full h-full rounded-full"
                priority
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center md:justify-start text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-600 to-purple-500">
              <svg
                className="w-10 h-10 mr-3 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              ABOUT ME
            </h2>

            <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0 text-gray-200">
              I&apos;m always curious and eager to learn new things. I enjoy
              turning ideas into solutions and working with others to create
              something meaningful. I believe growth comes from both challenges
              and experience. Let&apos;s connect and share ideas—I&apos;d love
              to hear from you!
            </p>

            <ul className="space-y-4 text-left max-w-2xl mx-auto md:mx-0">
              <li className="flex items-center text-lg text-gray-100">
                <IoMdCheckmarkCircleOutline className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />
                Passionate Full-Stack Developer
              </li>
              <li className="flex items-center text-lg">
                <IoMdCheckmarkCircleOutline className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />
                Problem-solver with a love for innovation
              </li>
              <li className="flex items-center text-lg">
                <IoMdCheckmarkCircleOutline className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />
                Building scalable &amp; efficient applications
              </li>
              <li className="flex items-center text-lg">
                <IoMdCheckmarkCircleOutline className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />
                Focused on Backend side and Data Structures, Algorithms, OOP
              </li>
              <li className="flex items-center text-lg">
                <IoMdCheckmarkCircleOutline className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" />
                Always learning and adapting
              </li>
            </ul>

            <div className="w-24 h-1 mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
