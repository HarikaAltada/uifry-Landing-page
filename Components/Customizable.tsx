/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState, RefObject } from "react";

function Customizable() {
  const [inView, setInView] = useState({
    p1: false,
    p2: false,
  });

  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);

  const observeElement = (
    ref: RefObject<HTMLElement>,
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
    observeElement(p1Ref, "p1");
    observeElement(p2Ref, "p2");
  }, []);

  return (
    <div className="bg-white p-5 flex justify-center mt-[-50px]">
      <section className="flex flex-col md:flex-row items-center md:justify-between max-w-screen-2xl">
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="./icons/Group 35930.png"
              alt=""
              className="hidden sm:block absolute top-20 left-0"
            />
            <img
              src="./icons/Group 35903.png"
              alt="Overlay Graphic"
              className="hidden sm:block w-full h-full"
            />
            <img
              src="./icons/iPhone-13-Pro-Front (4).png"
              alt="iPhone Mockup"
              className="lg:absolute lg:top-10 lg:left-40 max-w-lg w-full sm:w-1/2 md:w-3/5 h-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div
            className={`flex items-center mt-6 transition-opacity duration-1000 ${
              inView.p1 ? "slide-up slide-up-delay-1" : "opacity-0"
            }`}
            ref={p1Ref}
          >
            <img
              src="./icons/Group 35899 (1).png"
              alt="Notification Icon"
              className="h-6 w-6 mr-2"
            />
            <p className="text-xl font-bold">Fully Customizable</p>
          </div>
          <p
            className={`mt-4 text-gray-700 text-lg transition-opacity duration-1000 ${
              inView.p2 ? "slide-up slide-up-delay-2" : "opacity-0"
            }`}
            ref={p2Ref}
          >
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Customizable;
