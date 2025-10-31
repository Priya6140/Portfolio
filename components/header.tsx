"use client";

import { useEffect, useState } from "react";
import { headerTitle, links, userDetail } from "./seeding";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";

const Header = () => {
  const [hash, setHash] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { resume } = userDetail;

  useEffect(() => {
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      setHash(initialHash);
      document.getElementById(initialHash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setHash(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setShowScrollToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
    setHash(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-md border-b border-gray-200/40 dark:border-gray-700/40 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo / Title */}
          <h1
            onClick={() => handleLinkClick("profile")}
            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer hover:scale-105 transition-transform"
          >
            {headerTitle}
          </h1>

          {/* Desktop Links */}
          <nav className="hidden sm:flex gap-6 items-center">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  hash === link.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                {link.value}
                {hash === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
          >
            <MdOutlineFileDownload size={18} /> Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <IoClose size={26} /> : <CiMenuBurger size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl transition-all duration-500">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`${
                  hash === link.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                } transition-colors duration-200`}
              >
                {link.value}
              </button>
            ))}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-400 transition-all"
            >
              <MdOutlineFileDownload size={20} /> Resume
            </a>
          </div>
        )}
      </header>

      {/* Scroll To Top Button */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default Header;
