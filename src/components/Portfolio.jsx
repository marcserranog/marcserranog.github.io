import React, { useState, useEffect } from "react";
import { FileText, Award, FolderGit2, Menu } from "lucide-react";
import HomeSection from "./HomeSection";
import CVSection from "./CVSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";
import SideBar from "./Sidebar";
import Footer from "./Footer";
import { personalInfo, projects } from "../data/data";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="site-header fixed top-0 left-0 right-0 z-20">
        <div className="site-header-inner">
          <button
            className="site-brand"
            onClick={() => {
              setActiveSection("home");
              setMenuOpen(false);
              setProfileOpen(false);
            }}
            aria-label="Volver al inicio"
          >
            <span className="site-brand-mark">MS</span>
            <span>
              <strong>Marc Serrano</strong>
              <small>Backend Software Engineer</small>
            </span>
          </button>
        <div className="mobile-header-actions md:hidden">
          <button
            className={`mobile-profile-toggle ${profileOpen ? "is-active" : ""}`}
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label={profileOpen ? "Ocultar presentación" : "Mostrar presentación"}
            aria-expanded={profileOpen}
          >
            <img src="/Foto_cv.png" alt="" />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {[{ id: "cv", icon: FileText, label: "CV" },
            { id: "certificates", icon: Award, label: "Certificates" },
            { id: "projects", icon: FolderGit2, label: "Projects" }].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => {
                setActiveSection(id);
                setMenuOpen(false);
              }}
              aria-current={activeSection === id ? "page" : undefined}
              className={`site-nav-item ${
                activeSection === id ? "is-active" : ""
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        </div>
      </header>
      <div className="flex-1 flex flex-col md:flex-row pt-16">
        <SideBar
          personalInfo={personalInfo}
          setActiveSection={setActiveSection}
          mobileProfileOpen={profileOpen}
        />
        <main className="flex-1 min-w-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {activeSection === "home" && <HomeSection personalInfo={personalInfo} />}
            {activeSection === "cv" && <CVSection />}
            {activeSection === "projects" && <ProjectsSection projects={projects} />}
            {activeSection === "certificates" && <CertificatesSection />}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
