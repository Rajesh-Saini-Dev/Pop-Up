import React, { useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa6";

function PopUp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type="button"
        className="fixed rotate-90 top-1/3 right-[-20px] bg-slate-400 py-1 px-3 border-[1px] border-black hover:shadow-black hover:shadow-sm"
        onClick={() => setOpen(!open)}
      >
        Coupen
      </button>
      <div
        className={`w-screen h-screen bg-[#00000080] fixed ${open ? "block" : "hidden"}`}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 h-4/6 p-6 rounded-xl bg-white fixed transition-all duration-700 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${open ? "top-[50%]" : "top-[-100%]"}`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mt-1">Login to your account</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 relative"
            />
            <button
              type="button"
              className="absolute top-56 right-10 text-gray-500"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <FaEye className="h-5 w-5" />
              ) : (
                <LuEyeClosed className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded accent-slate-800" />
              Remember me
            </label>
            <a href="#" className="text-slate-800 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-1/3 bg-slate-500 text-white py-2 rounded-lg hover:bg-slate-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-slate-700 mt-6">
          Don’t have an account?
          <span className="text-slate-800 font-semibold cursor-pointer hover:underline ml-1">
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}

export default PopUp;
