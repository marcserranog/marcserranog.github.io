import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-xs py-1 border-t border-gray-300">
      <div className="flex items-center justify-center space-x-4 px-4">
        <span className="flex items-center space-x-2 text-gray-700">
          <span>Developed with</span>
          <FaReact className="text-blue-500 text-sm" title="React" />
          <SiTailwindcss className="text-teal-500 text-sm" title="Tailwind CSS" />
          <SiVite className="text-purple-500 text-sm" title="Vite" />
          <FaNodeJs className="text-green-600 text-sm" title="Node.js" />
          <FaGithub className="text-gray-800 text-sm" title="GitHub" />
        </span>
        <span className="text-gray-700 font-medium">
          © {new Date().getFullYear()} Marc Serrano 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
