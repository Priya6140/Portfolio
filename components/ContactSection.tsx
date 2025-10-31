"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { userDetail } from "./seeding";

const ContactSection = () => {
  const { name, email, phone, github, twitter, leetcode, resume, linkedin } = userDetail;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ Safe and clean useEffect for scroll animation
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      await axios.post("/api/email", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`w-full px-6 py-12 transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Heading title="Get In Touch" />
      <HorizontalLine />

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ✉️ Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Let’s Connect
          </h3>

          <form onSubmit={sendEmail} className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 transition-all">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 transition-all">
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder=" "
                rows={4}
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                required
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400 transition-all">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
              }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-500 text-center mt-4 font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center mt-4 font-medium">
                ❌ Failed to send message. Try again later.
              </p>
            )}
          </form>
        </div>

        {/* 📞 Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out to me via email or phone. You can also find me on social platforms below.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Name:</strong> {name}</li>
              <li><strong>Email:</strong> {email}</li>
              <li><strong>Phone:</strong> {phone}</li>
            </ul>
          </div>

          {/* Social Links + Resume */}
          <div>
            <div className="flex gap-6 mt-6">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition">
                <FaLinkedin size={24} />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-700 transition">
                <FaGithub size={24} />
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition">
                <FaTwitter size={24} />
              </a>
              <a href={leetcode} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-800 transition">
                <SiLeetcode size={24} />
              </a>
            </div>

            <div className="mt-6">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg px-3 py-2 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all"
              >
                <MdOutlineFileDownload size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
