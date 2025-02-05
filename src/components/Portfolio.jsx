import React, { useState, useEffect } from "react";
import {
  FileText,
  Award,
  FolderGit2,
} from "lucide-react";
import HomeSection from "./HomeSection";
import CVSection from "./CVSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import { personalInfo, projects } from "../data/data";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
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

      <div className="flex-1 flex overflow-hidden pt-20">
        <Sidebar personalInfo={personalInfo} setActiveSection={setActiveSection} />

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {activeSection === "home" && (
              <HomeSection personalInfo={personalInfo} />
            )}
            {activeSection === "cv" && <CVSection />}
            {activeSection === "projects" && (
              <ProjectsSection projects={projects} />
            )}
            {activeSection === "certificates" && <CertificatesSection />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
