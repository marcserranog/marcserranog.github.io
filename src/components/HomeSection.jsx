import {
  Brain,
  Monitor,
  User,
  ArrowRight,
} from "lucide-react";

const HomeSection = () => (
  <div className="space-y-10 animate-fade-in">
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Intro */}
      <section className="animate-slide-up flex gap-[16px]">
        <div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            ¡Hola! 👋
          </h1>
          <p className="text-gray-600 leading-relaxed">
            I'm a <strong>Backend Software Engineer</strong> with 4 years of
            experience building production software in <strong>Java</strong>,{" "}
            <strong>Go</strong>, and <strong>Python</strong>. I focus on
            backend services, APIs, system integration, and building software
            that is reliable and easy to evolve.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mt-[40px] animate-slide-up delay-100 flex gap-[16px]">
        <Brain className="w-[52px] h-[22px] mt-[4px] text-blue-500 stroke-[2.4]" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            What I work on
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Today, at <strong>Zara Home (Inditex)</strong>, I develop{" "}
            <strong>Java/Spring backend services</strong> and integrate APIs
            across multiple services and databases. I work within an
            established <strong>Domain-Driven Design</strong> and{" "}
            <strong>hexagonal architecture</strong>, investigating technical
            problems, evolving APIs safely, and preserving compatibility with
            existing consumers.
          </p>

          <p className="text-gray-600 leading-relaxed mt-[16px]">
            Previously, at{" "}
            <a
              href="https://www.linkedin.com/company/imbee/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              Imbee
            </a>
            , I built and maintained <strong>Go</strong> and{" "}
            <strong>Python</strong> backend microservices for an AI and
            chatbot platform used in production. I also created a custom step
            that enabled interactive experiences inside bot workflows, such as
            forms and loading states, with frontend and backend integration.
          </p>
        </div>
      </section>

      {/* Fullstack */}
      <section className="mt-[40px] animate-slide-up delay-300 flex gap-[16px]">
        <Monitor className="w-[52px] h-[22px] mt-[4px] text-blue-500 stroke-[2.4]" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Full-stack perspective
          </h2>
          <p className="text-gray-600 leading-relaxed">
            My core focus is backend engineering, but I also contribute to
            frontend products with <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>JavaScript</strong>. This
            full-stack perspective helps me understand the complete product
            lifecycle and collaborate effectively across engineering, product,
            and design.
          </p>
        </div>
      </section>

      {/* Personal */}
      <section className="mt-[40px] animate-slide-up delay-400 flex gap-[16px]">
        <User className="w-[52px] h-[22px] mt-[4px] text-blue-500 stroke-[2.4]" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Engineering approach
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I value clean code, clear APIs, backwards compatibility, automated
            testing, and pragmatic technical decisions. I enjoy understanding
            systems deeply, finding the root cause of problems, and turning
            complex requirements into software that is reliable and easy to
            evolve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-[40px] animate-slide-up delay-500 flex gap-[16px]">
        <ArrowRight className="w-[48px] h-[22px] mt-[4px] text-blue-500 stroke-[2.4]" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Let's connect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you are looking for a backend engineer with experience in{" "}
            <strong>Java, Go, Python, and microservices</strong>, feel free to
            reach out on LinkedIn or explore my work here.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default HomeSection;
