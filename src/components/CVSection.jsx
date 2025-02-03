import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CVSection = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pdfFile = "public/CV_Marc_Serrano.pdf";

  return (
    <div className="animate-fade-in h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">CV</h2>
        <a
          href={pdfFile}
          download
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Download CV
        </a>
      </div>
      <div className="h-[800px] bg-white rounded-2xl shadow-xl p-4">
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
};

export default CVSection;
