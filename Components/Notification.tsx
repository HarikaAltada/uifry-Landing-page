/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState, RefObject } from "react";

function Notification() {
  const [inView, setInView] = useState({
    h3_1: false,
    h3_2: false,
    p: false,
    notification: false,
  });

  const h3_1Ref = useRef<HTMLHeadingElement>(null);
  const h3_2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

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
    observeElement(h3_1Ref, "h3_1");
    observeElement(h3_2Ref, "h3_2");
    observeElement(pRef, "p");
    observeElement(notificationRef, "notification");
  }, []);

  return (
    <div className="bg-white pl-6 flex justify-center">
      <section className="flex flex-col md:flex-row items-center md:justify-between max-w-screen-xl">
        <div
          className={`md:w-3/4 transition-opacity duration-1000 ${
            inView.notification ? "slide-up slide-up-delay-1" : "opacity-0"
          }`}
          ref={notificationRef}
        >
          <h3
            className={`text-red-500 text-lg font-bold transition-opacity duration-1000 ${
              inView.h3_1 ? "slide-up slide-up-delay-1" : "opacity-0"
            }`}
            ref={h3_1Ref}
          >
            ADVANTAGES
          </h3>
          <h3
            className={`text-3xl font-bold mt-2 transition-opacity duration-1000 ${
              inView.h3_2 ? "slide-up slide-up-delay-2" : "opacity-0"
            }`}
            ref={h3_2Ref}
          >
            Why Choose Uifry?
          </h3>
          <div className="flex items-center mt-6">
            <img
              src="./icons/Group 35899.png"
              alt="Notification Icon"
              className="h-6 w-6 mr-2"
            />
            <p className="text-xl font-semibold">Clever Notifications</p>
          </div>
          <p
            className={`mt-4 text-gray-700 text-lg transition-opacity duration-1000 ${
              inView.p ? "slide-up slide-up-delay-3" : "opacity-0"
            }`}
            ref={pRef}
          >
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="mt-12 md:mt-0 md:w-3/4 flex justify-center">
          <div className="relative">
            <img
              src="./icons/Group 35930.png"
              alt=""
              className="hidden sm:block absolute top-20 left-12"
            />
            <img
              src="./icons/iPhone-13-Pro-Front (5).png"
              alt="iPhone Mockup"
              className="lg:absolute lg:top-10 lg:right-7 max-w-lg w-full sm:w-1/2 md:w-3/5 h-auto"
            />
            <img
              src="./icons/Group 35903.png"
              alt="Overlay Graphic"
              className="hidden sm:block w-full h-full md:ml-20 md:w-7/8"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notification;
