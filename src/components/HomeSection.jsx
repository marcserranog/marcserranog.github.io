const HomeSection = ({ personalInfo }) => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
      ¡Hola!
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        I am a Software Engineer specializing in front-end development with
        JavaScript/Typescript and React. My work focuses on designing and
        building intuitive, high-performance web applications that enhance user
        experiences. I thrive in collaborative environments where teamwork
        drives innovation and results. Prior to my current endeavors, I gained
        experience developing scalable web solutions and honing my expertise in
        modern front-end frameworks. 
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
        Outside of work, I like outdoor activities,such as paddle tennis and cycling, as well as keeping active by
        practising fitness. I also love the sea, sports like diving and surfing.
        I am really a fan of any sport.. I'm also passionate about photography,
        playing the guitar, and experimenting with creative coding projects in
        my spare time. 
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
        Feel free to connect with me on LinkedIn if you'd like to
        collaborate or chat! 😄
      </p>
    </div>
  </div>
);

export default HomeSection;
