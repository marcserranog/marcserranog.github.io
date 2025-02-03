import { ArrowUpRight } from "lucide-react";

const ProjectsSection = ({ projects }) => (
  <div className="animate-fade-in">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
    <div className="grid gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] cursor-pointer"
          onClick={() => window.open(project.url, "_blank")}
        >
          <div className="absolute top-5 right-5 text-gray-500 group-hover:text-blue-600 transition-colors">
            <ArrowUpRight
              size={28}
              className="group-hover:animate-pulse transition-transform"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">
            {project.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transform transition-transform hover:scale-110"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
