import React from "react";

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4" id="about">
      <div className="text-center mb-8">
        <h4 className="text-sm font-semibold text-gray-500">TESTIMONIAL</h4>
        <h2 className="md:text-4xl md:mb-[-50px] md:font-bold text-gray-800">
          What Our Users Say About Us?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white">
        <section className="relative mb-8 flex justify-center items-center w-full md:w-1/2 ">
          <img
            src="./icons/Group 35903.png"
            alt=""
            className="hidden sm:block relative left-40 md:left-60"
          />
          <img
            className="hidden sm:block absolute w-42 h-42 top-[5rem] left-[4rem]"
            src="./icons/Ellipse 45.png"
            alt=""
          />
          <img
            className="hidden sm:block absolute w-42 h-42 top-[0] right-[9rem]"
            src="./icons/Ellipse 44.png"
            alt=""
          />
          <img
            className="hidden sm:block absolute w-42 h-42 bottom-[0] left-[8rem]"
            src="./icons/Ellipse 43.png"
            alt=""
          />
          <img
            className="hidden sm:block absolute w-42 h-42 bottom-[0] right-[-5rem]"
            src="./icons/Ellipse 42.png"
            alt=""
          />{" "}
          <img
            src="./icons/Group 35930.png"
            alt=""
            className="hidden sm:block absolute top-20 left-10"
          />
          <img
            className="hidden sm:block relative bottom-[-1rem] right-[20rem] "
            src="./icons/Ellipse 41.png"
            alt=""
          />
        </section>
        <section className="flex flex-col justify-start items-start w-full md:w-1/2 md:mr-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <img
            className="max-w-[200px] mb-4"
            src="./icons/Group 35917.png"
            alt=""
          />
          <h5 className="text-lg font-semibold text-gray-800">Nick Jonas</h5>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
