const SkillSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 p-4 rounded-lg flex items-center">
              <img src="/html-icon.png" alt="HTML" className="w-8 h-8 mr-2" />
              <span className="text-lg font-bold">HTML</span>
            </div>
            <div className="bg-green-500 p-4 rounded-lg flex items-center">
              <img src="/css-icon.png" alt="CSS" className="w-8 h-8 mr-2" />
              <span className="text-lg font-bold">CSS</span>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg flex items-center">
              <img src="/react-icon.png" alt="React" className="w-8 h-8 mr-2" />
              <span className="text-lg font-bold">React</span>
            </div>
            <div className="bg-red-500 p-4 rounded-lg flex items-center">
              <img
                src="/node-icon.png"
                alt="Node.js"
                className="w-8 h-8 mr-2"
              />
              <span className="text-lg font-bold">Node.js</span>
            </div>
          </div>
          <div>
            <img src="/skills-image.png" alt="Skills" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
