import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex justify-around gap-5 bg-gray-200 text-dark py-8 px-8 w-full">
        <div className="mt-12 w-[50%]">
          <h1 className="text-black text-5xl font-semibold">
            Connect, Share & Grow <br /> with Developer <br /> Community
          </h1>
          <p className="text-gray-600 text-lg my-5">
            Join thousands of developers sharing knowledge, code, and building
            their network.
          </p>
          <div className="my-5 flex gap-5">
            <a
              href="/sign-up"
              className="text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-3 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="text-black bg-transparent border border-gray-300 hover:border-[#2563eb] hover:text-[#2563eb] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="flex justify-center w-[80%] items-center bg-white shadow-lg border border-gray-200 rounded-lg py-[75]">
            <Image
              src="/images/b5.png"
              alt="Banner Image"
              className="rounded-lg shadow-xl border border-gray-200"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
