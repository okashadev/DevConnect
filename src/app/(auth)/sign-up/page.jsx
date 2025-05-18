"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmPassMatch, setConfirmPassMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if passwords match on confirm_password change
    if (name === "confirm_password") {
      setConfirmPassMatch(formData.password === value);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone_number: formData.phone_number,
    };

    console.log("Submitting:", body);
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/sign-up",
        body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.data;
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error signing up:", error.response.data);
    }
  };

  return (
    <>
      <div className="h-full py-16 w-full bg-gray-200 flex justify-center items-center">
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
          <h1 className="text-xl text-[#1d4ed8] uppercase text-center font-semibold mt-3">
            Sign Up
          </h1>
          <div className="border-b border-b-gray-300 shadow w-full h-2 px-4 my-3"></div>
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col mb-4 mt-3">
                <label
                  htmlFor="email"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter your full name"
                  className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>
              <div className="flex flex-col mb-4 mt-3">
                <label
                  htmlFor="email"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={handleChange}
                  name="username"
                  placeholder="Enter your username"
                  className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col mb-4 mt-3">
                <label
                  htmlFor="email"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter your email"
                  className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>
              <div className="flex flex-col mb-4 mt-3">
                <label
                  htmlFor="phone_number"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone_number"
                  onChange={handleChange}
                  name="phone_number"
                  placeholder="Enter your phone number"
                  className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col mb-4 mt-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter your password"
                    className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="flex flex-col mb-4 mt-2">
                <label
                  htmlFor="confirm_password"
                  className="text-gray-700 ms-1 text-sm font-normal "
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm_password"
                    onChange={handleChange}
                    name="confirm_password"
                    placeholder="Enter your password"
                    className="border w-96 shadow-lg border-gray-300 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  />
                  <span
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  {!confirmPassMatch && (
                    <p className="text-red-500 text-sm mt-1">
                      Passwords do not match
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="px-5 my-4">
              <button type="submit" className="bg-[#1d4ed8] cursor-pointer text-white rounded-lg w-full pt-1 pb-2 mt-3">
              {loading ? 'loading...' : 'Sign Up'}  
              </button>
            </div>
          </form>
          <div className="border-b border-b-gray-300 shadow w-full h-2 px-4 my-3"></div>
          <div>
            <p className="text-gray-700 text-sm text-center">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-[#1d4ed8] hover:underline font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
