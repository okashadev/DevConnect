import Image from "next/image";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Profile: FC = () => {
  return (
    <>
      <div className="flex flex-col  items-center justify-center py-20 bg-gray-100">
        <div className="flex w-full max-w-xl justify-between gap-5 p-5 bg-white border border-gray-200 shadow-md rounded-lg">
          <div>
            <Image
              src="/images/avatars/avatar-2.jpg"
              alt="user"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">John Developer</h1>
            <p className="text-gray-500 text-sm mt-1">
              Senior Frontend Engineer @ Tech Corp
            </p>
            <p className="text-gray-500 mt-4">
              Building awesome web experiences with React and TypeScript. Open
              source enthusiast.
            </p>
            <div className="flex items-center mt-5 space-x-2">
              <p className="text-[#2563eb] py-1 px-3 text-sm rounded-xl bg-blue-100">
                React
              </p>
              <p className="text-[#2563eb] py-1 px-3 text-sm rounded-xl bg-blue-100">
                TypeScript
              </p>
              <p className="text-[#2563eb] py-1 px-3 text-sm rounded-xl bg-blue-100">
                Node.js
              </p>
              <p className="text-[#2563eb] py-1 px-3 text-sm rounded-xl bg-blue-100">
                GraphQL
              </p>
            </div>
            <div className="flex items-center mt-5 space-x-4">
              <div>
                <FaGithub className="text-lg hover:text-[#2563eb]" />
              </div>
              <div>
                <FaTwitter className="text-lg hover:text-[#2563eb]" />
              </div>
              <div>
                <FaLinkedin className="text-lg hover:text-[#2563eb]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-xl justify-between gap-5 p-5 bg-white border border-gray-200 shadow-md rounded-lg my-10">
          <h1 className="text-xl font-semibold">Projects</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Profile;
