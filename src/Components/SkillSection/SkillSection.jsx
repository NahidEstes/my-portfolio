import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

const SkillsSection = () => {
  return (
    <section className="">
      <div className="custom-container">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid lg:grid-cols-2 items-center gap-4">
          <div className="">
            <div className="grid lg:grid-cols-2 gap-5 md:flex-row ">
              {/* <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-sky-100 w-72 h-20"> */}
              <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-sky-100 lg:w-72 lg:h-20">
                <div className="border-2 rounded border-gray-400 bg-white p-1 my-2">
                  <AiFillHtml5 className="text-5xl text-red-400" />
                </div>
                <h3 className="text-lg font-semibold ml-5">HTML5</h3>
              </div>
              <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-sky-100 lg:w-72 lg:h-20">
                <div className="border-2 rounded border-gray-400 bg-white p-1 my-2">
                  <FaCss3Alt className="text-5xl text-black" />
                </div>
                <h3 className="text-lg font-semibold ml-5">CSS3</h3>
              </div>
            </div>
            <br />
            <div className="grid lg:grid-cols-2 gap-5 md:flex-row ">
              {/* <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-sky-100 w-72 h-20"> */}
              <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-yellow-100 lg:w-72 lg:h-20">
                <div className="border-2 rounded border-gray-400 bg-white p-1 my-2">
                  <BiLogoJavascript className="text-5xl text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold ml-5">JavaScript</h3>
              </div>
              <div className="flex items-center px-5 border border-gray-500 shadow rounded bg-sky-100 lg:w-72 lg:h-20">
                <div className="border-2 rounded border-gray-400 bg-white p-1 my-2">
                  <FaReact className="text-5xl text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold ml-5">React JS</h3>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              //   className="lg:w-8/12 lg:ml-40"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
