import React, { useEffect, useRef, useState, RefObject } from "react";

function Premium() {
  const [inView, setInView] = useState({
    premium: false,
    main1: false,
    main2: false,
    main3: false,
  });

  const premiumRef = useRef<HTMLDivElement>(null);
  const main1Ref = useRef<HTMLDivElement>(null);
  const main2Ref = useRef<HTMLDivElement>(null);
  const main3Ref = useRef<HTMLDivElement>(null);

  const observeElement = (
    ref: RefObject<HTMLDivElement>,
    key: keyof typeof inView
  ) => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  };

  useEffect(() => {
    observeElement(premiumRef, "premium");
    observeElement(main1Ref, "main1");
    observeElement(main2Ref, "main2");
    observeElement(main3Ref, "main3");
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      id="features"
    >
      <div className="container lg:mt-[59px] px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="relative flex justify-center">
          <img
            src="./icons/Group 35930.png"
            alt=""
            className="hidden sm:block absolute top-0 left-0"
          />
          <img
            src="./icons/Group 35898.png"
            alt="Overlay"
            className="hidden sm:block absolute top-10 left-0 w-full h-full"
          />
          <img
            src="./icons/iPhone-13-Pro-Front (4).png"
            alt="Phone"
            className="lg:absolute lg:top-0 lg:left-40 max-w-lg w-full sm:w-1/2 md:w-3/5 h-auto"
          />
        </div>
        <div className="flex flex-col justify-center md:ml-10">
          <div
            className={`lg:text-left lg:max-w-lg transition-opacity duration-1000 ${
              inView.premium ? "slide-up slide-up-delay-1" : "opacity-0"
            }`}
            ref={premiumRef}
          >
            <h3 className="feature text-red-500 text-lg font-semibold">
              FEATURES
            </h3>
            <h2 className="premium text-4xl font-bold">uifry premium</h2>
            <div className="mt-7 space-y-6">
              <div
                className={`main1 transition-opacity duration-1000 ${
                  inView.main1 ? "slide-up slide-up-delay-2" : "opacity-0"
                }`}
                ref={main1Ref}
              >
                <div className="flex items-start">
                  <img
                    src="./icons/star-05.png"
                    alt="Star"
                    className="h-5 w-5 mt-3 mr-3"
                  />
                  <h4 className="mt-2 text-xl font-semibold">
                    Budgeting intervals
                  </h4>
                </div>

                <p className="mt-2 text-gray-600 text-lg">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
              <div
                className={`main2 transition-opacity duration-1000 ${
                  inView.main2 ? "slide-up slide-up-delay-3" : "opacity-0"
                }`}
                ref={main2Ref}
              >
                <div className="flex items-start">
                  <img
                    src="./icons/cube-02.png"
                    alt="Cube"
                    className="h-5 w-5 mt-3 mr-3"
                  />
                  <h4 className="mt-2 text-xl font-semibold">
                    Advanced analytics
                  </h4>
                </div>
                <p className="mt-2 text-gray-600 text-lg">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
              <div
                className={`main3 transition-opacity duration-1000 ${
                  inView.main3 ? "slide-up slide-up-delay-4" : "opacity-0"
                }`}
                ref={main3Ref}
              >
                <div className="flex items-start">
                  <img
                    src="./icons/cube-04.png"
                    alt="Cube"
                    className="h-5 w-5 mt-3 mr-3"
                  />
                  <h4 className="mt-2 text-xl font-semibold">Custom reports</h4>
                </div>
                <p className="mt-2 text-gray-600 text-lg">
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
