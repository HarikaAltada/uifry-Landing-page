import React from "react";

function Main() {
  return (
    <div
      className="bg-white text-gray-900 font-sans leading-normal tracking-normal"
      id="home"
    >
      <img
        src="./icons/Star 8.png"
        alt=" "
        className="absolute top-20 left-[40px]"
      />
      <div className="container mt-20 mx-auto px-6 py-6 flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 max-w-6xl">
        <section className="flex-1 flex flex-col justify-center items-center">
          <div className="text-center lg:text-left lg:max-w-md">
            <h2 className="text-4xl font-bold mb-4">
              Make The Best Financial Decisions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Get Started</span>
                <img src="./icons/Vector 1.png" alt="" className="w-5" />
              </button>
              <button className="flex items-center space-x-2 text-gray-700">
                <img src="./icons/Group 3.png" alt="" className="w-6 h-6" />
                <span>Watch Video</span>
              </button>
            </div>
            <img src="./icons/Star 8.png" alt="" />
            <img
              src="./icons/Group 35924.png"
              alt=""
              className="w-full max-w-xl"
            />
          </div>
        </section>
        <section className="relative flex-1 flex justify-center">
          <div className="relative w-full max-w-xl animated-infinite-jump">
            <img
              src="./icons/Group 35930.png"
              alt=""
              className="hidden sm:block absolute top-0 left-0 w-full sm:top-16 sm:left-16 md:top-20 md:left-20 lg:top-20 lg:left-20"
            />
            <img
              src="./icons/Group 35887.png"
              alt=""
              className="hidden sm:block w-full absolute top-10 left-10 translate-x-0 translate-y-0"
            />
            <img
              src="./icons/iPhone-13-Pro-Front (1).png"
              alt=""
              className="hidden sm:block absolute top-0 left-0 w-full sm:top-16 sm:left-16 md:top-20 md:left-20 lg:top-40 lg:left-40"
            />
            <img
              src="./icons/iPhone-13-Pro-Front (2).png"
              alt=""
              className="hidden sm:block absolute top-0 left-0 w-full sm:top-16 sm:left-16 md:top-20 md:left-20 lg:top-20 lg:left-20"
            />
            <img
              src="./icons/iPhone-13-Pro-Front (1).png"
              alt=""
              className="hidden sm:block absolute top-0 left-0 w-full sm:top-30 sm:left-30 md:top-40 md:left-40 lg:top-0 lg:left-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
