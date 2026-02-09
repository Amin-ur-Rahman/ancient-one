import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Tranter Jaskulski",
    title: "Founder & Specialist",
    image:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Denice Jagna",
    title: "Tired & M. Specialist",
    image:
      "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Kenji Milton",
    title: "Team Member",
    image:
      "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Ken Jaskui",
    title: "Team Member",
    image:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

const socialIcons = [
  { component: FaLinkedin, color: "#0A66C2", name: "LinkedIn" },
  { component: SiX, color: "#1DA1F2", name: "X" },
  { component: FaInstagram, color: "#E1306C", name: "Instagram" },
];

const MeetOurTeam = () => {
  return (
    <div className="flex flex-col my-20 px-4 md:px-8 lg:px-0 container mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
  bg-gradient-to-r from-purple-500 via-blue-500  to-purple-400 mb-4"
        >
          Meet the Team
        </h1>
        <p className="text-gray-700 md:text-lg max-w-3xl mx-auto">
          With over 100 years of combined experience, we've got a well-seasoned
          team at the helm.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-lg p-4 sm:p-6 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <a href={member.linkedin} className="mx-auto">
              <img
                className="rounded-2xl drop-shadow-md transition-all duration-200"
                src={member.image}
                alt={member.name}
              />
            </a>
            <div className="text-center mt-4 sm:mt-6">
              <h2 className="text-gray-900 font-bold text-lg sm:text-xl mb-1">
                {member.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                {member.title}
              </p>
              <div className="flex items-center justify-center gap-3 relative">
                {socialIcons.map((icon, i) => {
                  const IconComp = icon.component;
                  return (
                    <motion.div
                      key={i}
                      className="relative group"
                      whileHover={{ x: 5, y: -5 }}
                    >
                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center h-10 w-10 rounded-full"
                      >
                        <IconComp size={20} style={{ color: icon.color }} />
                      </a>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-xs text-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {icon.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
