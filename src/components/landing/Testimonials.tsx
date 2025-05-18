import Image from "next/image";
import React, { FC } from "react";

const Testimonials: FC = () => {
  return (
    <>
      <div className="bg-gray-200 py-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center font-semibold text-black text-3xl">
            Loved by developers
          </h1>
          <p className="text-center text-gray-600 text-sm">
            See what our community has to say
          </p>
        </div>
        <div className="flex justify-between px-[80px] gap-6 my-20">
          <div className="bg-gray-100 border border-gray-100 rounded-lg px-4 py-6 shadow-md">
            <div className="mb-3 flex items-center gap-4">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Code Sharing"
                className="rounded-full"
                width={48}
                height={48}
              />
              <div>
                <h1 className="font-semibold">Alex Morgan</h1>
                <p className="text-sm text-gray-500">
                  Senior Developer @ Google
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">
                "DevConnect has been instrumental in helping me grow my network
                and stay updated with the latest tech trends."
              </p>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-100 rounded-lg px-4 py-6 shadow-md">
            <div className="mb-3 flex items-center gap-4">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Code Sharing"
                className="rounded-full"
                width={48}
                height={48}
              />
              <div>
                <h1 className="font-semibold">Alex Morgan</h1>
                <p className="text-sm text-gray-500">
                  Senior Developer @ Google
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">
                "DevConnect has been instrumental in helping me grow my network
                and stay updated with the latest tech trends."
              </p>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-100 rounded-lg px-4 py-6 shadow-md">
            <div className="mb-3 flex items-center gap-4">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Code Sharing"
                className="rounded-full"
                width={48}
                height={48}
              />
              <div>
                <h1 className="font-semibold">Alex Morgan</h1>
                <p className="text-sm text-gray-500">
                  Senior Developer @ Google
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">
                "DevConnect has been instrumental in helping me grow my network
                and stay updated with the latest tech trends."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
