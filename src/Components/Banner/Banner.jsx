const BannerSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <div className="relative">
              <h2 className="text-4xl font-bold tracking-tight">
                <span className="">Hi,</span>
                <span className="text-blue-500"> I am Nahid</span>
              </h2>
              <br />
              <h1 className="text-5xl font-bold">I am a Web Developer</h1>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/175431947/photo/portfolio.jpg?s=612x612&w=0&k=20&c=9pb0AqcWqjKI2bJJ_pRidZyb5cKxpdSVB6dgYOpDLwI="
              alt="Portfolio"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
