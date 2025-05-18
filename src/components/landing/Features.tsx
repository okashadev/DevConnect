import React, { FC } from "react";
import { FaCode } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

const Features: FC = () => {
  return (
    <>
      <div className="my-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center font-semibold text-black text-3xl">
            Everything you need to grow
          </h1>
          <p className="text-center text-gray-600 text-sm">
            Powerful features to boost your developer journey
          </p>
        </div>
        <div className="flex  justify-between px-28 gap-6 my-20">
          <div className="feature-item  border border-gray-100 rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaCode className="text-blue-600 text-xl" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Code Sharing</h1>
              <p className="text-gray-600 text-sm">
                Share code snippets with syntax highlighting and version control
                integration.
              </p>
            </div>
          </div>
          <div className="feature-item border border-gray-100 rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Community</h1>
              <p className="text-gray-600 text-sm">
                Connect with like-minded developers and build your professional
                network.
              </p>
            </div>
          </div>
          <div className="feature-item border border-gray-100 rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <IoIosRocket className="text-blue-600 text-xl" />
            </div>
            <div>
              <h1 className="text-black font-semibold">Career Growth</h1>
              <p className="text-gray-600 text-sm">
                Find opportunities and showcase your projects to potential
                employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
