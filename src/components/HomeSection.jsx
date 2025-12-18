import {
  Sparkles,
  Brain,
  Layers,
  Monitor,
  User,
  ArrowRight,
} from "lucide-react";

const HomeSection = () => (
  <div className="space-y-10 animate-fade-in">
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Intro */}
      <section className="animate-slide-up flex gap-4">
        <Sparkles className="w-7 h-7 text-blue-500 mt-1" />
        <div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            ¡Hola! 👋
          </h1>
          <p className="text-gray-600 leading-relaxed">
            I'm a <strong>Software developer</strong> specializing in AI,
            backend systems, and full-stack development. My top technologies are{" "}
            <strong>Go</strong> and <strong>Python</strong> for the backend, and{" "}
            <strong>TypeScript</strong>
            and React for the frontend. I'm always striving to learn and work
            hard to achieve the best results.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mt-10 animate-slide-up delay-100 flex gap-4">
        <Brain className="w-7 h-7 text-blue-500 mt-1" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            What I work on
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At <strong>Imbee</strong>, I work on{" "}
            <strong>AI-powered conversational platforms</strong>, building
            backend services that allow users and chatbots to communicate in
            real time. My focus is on designing{" "}
            <strong>scalable microservices</strong> using <strong>Go</strong>{" "}
            and <strong>Python</strong>, supported by technologies like{" "}
            <strong>Docker</strong>, <strong>RabbitMQ</strong>,{" "}
            <strong>Redis</strong>, and real-time communication protocols.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            A big part of my work focuses on bridging complex backend systems
            with a visual, cloud-style management interface used to configure
            conversational AI solutions. I help build the backend logic that
            powers features like agent connections, conversational flows, and
            step-based workflows, while ensuring everything is exposed in a way
            that feels clear and intuitive to the end user.
          </p>
        </div>
      </section>

      {/* Fullstack */}
      <section className="mt-10 animate-slide-up delay-300 flex gap-4">
        <Monitor className="w-7 h-7 text-blue-500 mt-1" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Full-stack perspective
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Alongside backend development, I actively work on the frontend using
            <strong> React</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>TypeScript</strong>. This allows me to translate complex
            backend logic into clean, usable interfaces and to collaborate
            effectively across product, design, and engineering teams.
          </p>
        </div>
      </section>

      {/* Personal */}
      <section className="mt-10 animate-slide-up delay-400 flex gap-4">
        <User className="w-7 h-7 text-blue-500 mt-1" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Beyond work
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Outside of work, I enjoy staying active through sports and outdoor
            activities like paddle tennis and cycling. I’m especially drawn to
            the sea and water sports such as diving and surfing, and I like
            spending time on photography, playing the guitar, and personal side
            projects.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 animate-slide-up delay-500 flex gap-4">
        <ArrowRight className="w-7 h-7 text-blue-500 mt-1" />
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Let’s connect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you’re interested in <strong>AI platforms</strong>,{" "}
            <strong>backend systems</strong>, or{" "}
            <strong>full-stack development</strong>, feel free to reach out on
            LinkedIn or explore my work here. I’m always open to new
            conversations.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default HomeSection;
