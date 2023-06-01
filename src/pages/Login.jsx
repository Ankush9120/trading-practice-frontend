import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <form className="loginContainer grow text-white p-6 flex flex-col justify-between gap-4 text-sm my-auto">
      <header className="text-2xl grid gap-1.5">
        <div>
          Welcome
          <span className="text-red-500 font-semibold ml-2.5">Back,</span>
          <span className="font-semibold underline ml-3">Login</span>
        </div>
        <div>
          <span className="text-red-500 font-bold mr-1">for</span> Continue ...
        </div>
      </header>

      <img
        className="mx-auto w-40"
        src="https://i.ibb.co/vcbKfLx/1501739-Jf-A699-HL-2.gif"
        alt="logo"
      />

      <input
        type="text"
        placeholder="Enter Your Login Id"
        className="bg-transparent myShadow w-[16rem] mx-auto text-center p-2.5"
      />
      <input
        type="text"
        placeholder="Enter Your Pass"
        className="bg-transparent myShadow w-[16rem] mx-auto text-center p-2.5"
      />

      <button
        type="submit"
        className="singInBtn btn bg-red-600 mx-auto whitespace-nowrap p-2 w-[14rem] rounded-md myShadow"
      >
        Login
      </button>

      <p className="text-center text-sm text-neutral-500">
        Don't have Account ?
      </p>

      <NavLink
        to="/register"
        className="signUpBtn btn bg-neutral-700 mx-auto whitespace-nowrap p-2 w-[14rem] rounded-md myShadow text-center"
      >
        Create Account
      </NavLink>

      <p className="text-center text-neutral-500">Or</p>

      <div className="flex items-center justify-center gap-8">

        {/* Google Button  */}
        <button className="googleBtn w-14 h-14 btn bg-neutral-700 whitespace-nowrap p-4 rounded-full myShadow flex justify-center gap-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-full fill-white"
              stroke="white"
            >
              <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"></path>
            </svg>
        </button>

        {/* Telegram Button  */}
        <button className="TelegramBtn w-14 h-14 btn bg-neutral-700 whitespace-nowrap p-4 rounded-full myShadow flex justify-center gap-[4px]">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full fill-white relative bottom-0.5 right-0.5">
              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
};

export default Login;
