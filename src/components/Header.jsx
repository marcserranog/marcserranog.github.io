import React from "react";
import { FileText, Award, FolderGit2 } from "lucide-react";

const Header = ({ activeSection, setActiveSection }) => (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Marc Serrano</h1>
      {/* Navigation Items */}
      <nav className="flex space-x-6">
        {[
          { id: "cv", icon: FileText, label: "CV" },
          { id: "certificates", icon: Award, label: "Certificates" },
          { id: "projects", icon: FolderGit2, label: "Projects" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeSection === id
                ? "bg-blue-500 text-white shadow-md"
                : "hover:bg-blue-50 text-gray-800"
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
