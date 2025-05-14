"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/sign-in", {
        email: data.email,
        password: data.password,
      });
      const res = await response.data;
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Handle error here
      console.error("Error logging in:", error);
    }
  }
  return (
    <>
      <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
        <div className="bg-white flex flex-col justify-center p-4 rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo/NewWebLogo.png"
              alt="logo"
              width={250}
              height={50}
            />
            <p className="text-gray-700 text-sm">
              Join the developer community
            </p>
          </div>
          <h1 className="text-xl text-[#1d4ed8] text-center font-semibold mt-3">
            Sign In
          </h1>
          <div className="border-b border-b-gray-300 shadow w-full h-2 px-4 my-3"></div>
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4 mt-3">
              <label
                htmlFor="email"
                className="text-gray-700 ms-1 text-sm font-normal "
              >
                Email address
              </label>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="email"
                placeholder="Enter your email"
                className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              />
            </div>
            <div className="flex flex-col mb-4 mt-2">
              <label
                htmlFor="email"
                className="text-gray-700 ms-1 text-sm font-normal "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Enter your password"
                className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
              />
            </div>
            <div className="flex justify-between items-center px-2 my-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-[#1d4ed8]"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-700 ms-2 text-sm font-normal "
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-[#1d4ed8] hover:underline text-sm font-normal"
              >
                Forgot password?
              </a>
            </div>
            <div className="px-5 my-4">
              <button type="submit" className="bg-[#1d4ed8] cursor-pointer text-white rounded-lg w-full pt-1 pb-2 mt-3">
                {loading ? 'loading...' :
                  'Sign in to your account'}
              </button>
            </div>
          </form>
          <div className="border-b border-b-gray-300 shadow w-full h-2 px-4 my-3"></div>
          <div>
            <p className="text-gray-700 text-sm text-center">
              Don't have an account?{" "}
              <a
                href="/sign-up"
                className="text-[#1d4ed8] hover:underline font-semibold"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
