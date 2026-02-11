import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const NewXIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path d="M5 3l7.5 8.5L5 21" />
      <path d="M19 3l-7.5 8.5L19 21" />
    </g>
  </svg>
);

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "#" },
  { Icon: NewXIcon, label: "X", href: "#" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Motion.footer
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-dark-light text-text-light"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-text-light font-bold">
              AO
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ancient One</h3>
              <p className="text-sm text-text-muted">
                Mystical landing & event template
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-4 mb-3">
            {socials.map((s) => {
              const IconComp = s.Icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-dark hover:bg-primary transition-colors"
                >
                  <IconComp className="w-4 h-4 text-text-light" />
                </a>
              );
            })}
          </div>

          <div className="text-sm text-text-muted">
            © {year} Ancient One. All rights reserved.
          </div>
        </div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
