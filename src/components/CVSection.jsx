const CVSection = () => {
  const pdfFile = "/CV_MarcSerrano.pdf"; 

  return (
    <div className="animate-fade-in h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">CV</h2>
        <div className="flex gap-4">
          <a
            href={pdfFile}
            download="CV_MarcSerrano.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="h-[800px] bg-white rounded-2xl shadow-xl p-4 overflow-hidden">
        <iframe
          src={pdfFile}
          title="Marc Serrano CV"
          className="w-full h-full rounded-lg"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default CVSection;
