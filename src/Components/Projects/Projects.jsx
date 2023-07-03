// const Projects = () => {
//   return (
//     <div>
//       <div className="container mx-auto px-4 my-10">
//         <h1 className="text-3xl text-center font-bold">
//           Featured <span className="text-blue-700">Projects</span>{" "}
//         </h1>
//       </div>
//     </div>
//   );
// };
// export default Projects;

const Projects = () => {
  return (
    <section className="bg-white py-20">
      <div className="custom-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center my-5">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div>
          <div className="grid lg:grid-cols-2 items-center justify-center">
            <img
              src="https://media.istockphoto.com/id/1309878877/photo/business-people-meeting-to-discuss-strategy-and-plan-for-business-and-investment.jpg?s=612x612&w=0&k=20&c=ofs0xOOKqMXSlVWjZS8o0XAmg4_Md5p39owY5dLGQWA="
              alt="Project 1"
              className="mb-4 rounded-lg"
            />
            <div className="p-3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project 1
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus lacus eu nisi ullamcorper, et volutpat est
                semper.
              </p>
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer">
                Live Site
              </p>

              <p className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded inline-block ml-5 cursor-pointer">
                Github
              </p>
            </div>
          </div>

          {/* <div className="flex items-center justify-center lg:my-10"> */}
          <div className="grid lg:grid-cols-2 items-center justify-center lg:my-10 my-3">
            <img
              src="https://media.istockphoto.com/id/1309878877/photo/business-people-meeting-to-discuss-strategy-and-plan-for-business-and-investment.jpg?s=612x612&w=0&k=20&c=ofs0xOOKqMXSlVWjZS8o0XAmg4_Md5p39owY5dLGQWA="
              alt="Project 1"
              className="mb-4 rounded-lg lg:order-last"
            />
            <div className="p-3">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project 1
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus lacus eu nisi ullamcorper, et volutpat est
                semper.
              </p>
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer">
                Live Site
              </p>

              <p className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded inline-block ml-5 cursor-pointer">
                Github
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center justify-center">
            <img
              src="https://media.istockphoto.com/id/1309878877/photo/business-people-meeting-to-discuss-strategy-and-plan-for-business-and-investment.jpg?s=612x612&w=0&k=20&c=ofs0xOOKqMXSlVWjZS8o0XAmg4_Md5p39owY5dLGQWA="
              alt="Project 1"
              className="mb-4 rounded-lg"
            />
            <div className="p-3 ">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project 1
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus lacus eu nisi ullamcorper, et volutpat est
                semper.
              </p>
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer">
                Live Site
              </p>

              <p className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded inline-block ml-5 cursor-pointer">
                Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
