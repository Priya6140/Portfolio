"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { userDetail } from "./seeding";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { HighlightedText } from "@/utils";

const ProfileSection = () => {
  const {
    profileImg,
    name,
    role,
    phone,
    email,
    DOB,
    linkedin,
    github,
    twitter,
    leetcode,
    description,
    resume,
  } = userDetail;

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="profile"
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center py-16 px-6 transition-all duration-1000 ease-in-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />

      {/* Profile Card */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 sm:p-10 w-full max-w-4xl transition-all hover:shadow-2xl">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-12">
          {/* Profile Image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-400/30 hover:ring-blue-500/50 transition-all duration-500">
            <Image
              src={profileImg}
              alt="Profile"
              fill
              className="object-cover rounded-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
              {name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
              {role}
            </p>

            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p><span className="font-semibold">📞 Phone:</span> {phone}</p>
              <p><span className="font-semibold">📧 Email:</span> {email}</p>
              <p><span className="font-semibold">🎂 DOB:</span> {DOB}</p>
            </div>

            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 border border-blue-400 text-blue-600 dark:text-blue-300 dark:border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/30 transition-all"
            >
              <MdOutlineFileDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-start gap-8 mt-8">
          <SocialLink href={linkedin} icon={<FaLinkedin />} color="text-blue-600" />
          <SocialLink href={github} icon={<FaGithub />} color="text-gray-800 dark:text-white" />
          <SocialLink href={twitter} icon={<FaTwitter />} color="text-sky-500" />
          <SocialLink href={leetcode} icon={<SiLeetcode />} color="text-orange-600" />
        </div>

        {/* Description */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-2xl mx-auto sm:mx-0">
            <HighlightedText text={description} />
          </p>
        </div>
      </div>
    </section>
  );
};

interface SocialProps {
  href: string;
  icon: React.ReactNode;
  color: string;
}

const SocialLink = ({ href, icon, color }: SocialProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-transform transform hover:scale-110 hover:opacity-80 ${color}`}
  >
    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all">
      {icon}
    </div>
  </a>
);

export default ProfileSection;
