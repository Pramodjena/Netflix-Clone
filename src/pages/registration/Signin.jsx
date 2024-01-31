/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [showPasword, setShowPassword] = useState(false);

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(80deg,black,transparent),url(https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <div className="flex justify-center items-center h-screen">
          <div
            className="bg-black bg-opacity-75 text-white 
                    p-20 rounded-lg"
          >
            <div className="">
              <h2 className=" text-3xl font-bold mb-7">Sign In</h2>
              <div className=" mb-7">
                <input
                  type="email"
                  placeholder="Email or phone number"
                  className="w-full px-3 py-3 rounded-md bg-transparent outline-none border hover:ring-1 hover:ring-gray-50"
                />
              </div>
              <div className=" mb-7 flex items-center relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPasword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-3 rounded-md bg-transparent outline-none border hover:ring-1 hover:ring-gray-50"
                />
                {showPasword ? (
                  <FaEye
                    className="absolute  right-2"
                    onClick={() => setShowPassword(!showPasword)}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute  right-2"
                    onClick={() => setShowPassword(!showPasword)}
                  />
                )}
              </div>
              <div className="flex justify-center mb-2">
                <button className="bg-[#e50815] w-full py-3 rounded-md font-bold hover:bg-[#d80c1a] ">
                  Sign In
                </button>
              </div>
              <div className=" mb-10">
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className=" text-gray-400 font-light text-sm">
                      Remember
                    </label>
                  </div>
                  <div className="">
                    <p className="font-light text-sm text-gray-400">
                      Need help?
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mb-5">
                <span className="font-light text-gray-400"></span>
                <Link to={"/"}>
                  New to Netflix?{" "}
                  <span className="font-bold hover:underline">
                    Sign up now.
                  </span>
                </Link>
              </div>
              <div className=" mb-20">
                <p className=" text-xs text-gray-400">
                  This page is protected by Google reCAPTCHA to <br /> ensure
                  you're not a bot.
                  <span className=" text-blue-600">Learn more.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
