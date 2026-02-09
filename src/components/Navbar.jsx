import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Events", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-dark px-6 py-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          YourLogo
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className={`text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  activeLink === link
                    ? "text-primary bg-dark-light"
                    : "text-text-light hover:text-accent hover:bg-dark-light"
                }`}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
