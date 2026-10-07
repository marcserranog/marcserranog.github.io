import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Certificates</h2>
      <article className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-start gap-4">
          <Award className="w-8 h-8 text-blue-500 shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Claude 101 — Anthropic
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2">
              Certificate covering the fundamentals of Claude and its use in
              practical workflows.
            </p>
            <a
              href="https://verify.skilljar.com/c/3kn4zokfj42f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-blue-600 font-semibold hover:underline"
            >
              Verify certificate
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
  
  export default CertificatesSection;
  