// src/FAQ.js
import React from "react";

const faqs = [
  {
    id: 1,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    id: 2,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    id: 2,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    id: 1,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    id: 1,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
  {
    id: 2,
    question: "The Best Financial Accounting App Ever!",
    answer:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
  },
];

const FAQ = () => {
  return (
    <div className="container mx-auto p-8 max-w-6xl" id="pricing">
      <h5 className="text-red-600">FAQ</h5>
      <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${
              faq.id === 1 ? "bg-red-400 text-white" : "bg-white text-black"
            }`}
            style={{ marginTop: index % 2 === 0 ? "0" : "20px" }}
          >
            <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <img src="./icons/Frame.png" alt="" className="md:mt-40  " />{" "}
      <footer className="bg-white text-black py-8 mt-20 md:mt-40">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <img
                src="./icons/Frame (1).png"
                alt="Uifry"
                className="h-7 w-7 mr-1"
              />
              <h2 className="font-bold text-xl">Uifry</h2>
            </div>
            <div className="flex items-center mb-2">
              <img
                src="./icons/Frame (2).png"
                alt=""
                className="h-5 w-5 mt-1 mr-1"
              />
              <p>Help@Frybix.Com</p>
            </div>
            <div className="flex items-center">
              <img
                src="./icons/Frame (3).png"
                alt=""
                className="h-5 w-5 mt-1"
              />
              <p>+1234 456 678 89</p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-11 gap-3 ">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-4 ">Links</h3>
              <ul>
                <li className="mb-2 ">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2  ">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Bookings
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms Of Use
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-4">Product</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Take Tour
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Live Chat
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay Up To Date</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                />
                <button className="p-2 bg-black text-white rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p>&copy; 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
