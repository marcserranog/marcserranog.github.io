import React from "react";
import { Mail, MapPin, Linkedin, Github, Briefcase } from "lucide-react";

const SideBar = ({ personalInfo, setActiveSection }) => {
  return (
    <aside className="profile-sidebar w-64 bg-white shadow-xl flex flex-col items-center px-6 py-8 space-y-6 ml-10">
      {/* Profile Image Button */}
      <button
        onClick={() => setActiveSection("home")}
        className="profile-photo group relative w-32 h-32 rounded-full mb-6 transform transition-transform hover:scale-105 ring-2 ring-blue-500 ring-offset-2"
      >
        <img
          src="/Foto_cv.png"
          alt="Marc Serrano"
          className="w-full h-full rounded-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
      </button>

      {/* Name and Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{personalInfo.name}</h3>
      <div className="profile-badge">
        <span>Backend Software Engineer</span>
        <span>Java · Go · Python</span>
      </div>
      <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
        <Briefcase size={18} className="text-blue-500" />
        <span>{personalInfo.title}</span>
      </p>

      {/* Personal Info - Location and Email */}
      <div className="space-y-3 text-sm text-gray-600 w-full text-center">
        {/* Location */}
        <div className="flex items-center justify-center space-x-3">
          <MapPin size={18} className="text-blue-500" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-3">
          <Mail size={18} className="text-red-500" />
          <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-red-500 transition-colors">
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href={personalInfo.linkedin}
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={personalInfo.github}
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          <Github size={24} />
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
