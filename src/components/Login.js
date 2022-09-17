import React from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";
import img from "../../src/img/portrait-african-american-teenager-holding-shopping-paper-bags-buying-presents.jpg";
const Login = () => {
  return (
    <section
      style={{ background: `url(${img})`, backgroundSize: "cover" }}
      className="flex justify-center items-center mx-auto w-full h-screen"
    >
      <div className=" bg-opacity-50 bg-slate-200  w-[400px] h-[400px] p-10 rounded-2xl">
        <div class="flex items-center  py-2 px-3  mb-4  border-b-2 border-0 border-slate-800 ">
          <IoMail className="w-9 h-9 " />
          <input
            class="pl-2 rounded-none w-full max-w-xs text-black bg-transparent outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="flex items-center  py-2 px-3  mb-4  border-b-2 border-0 border-slate-800 ">
          <IoLockClosed className="w-9 h-9 " />
          <input
            class="pl-2 rounded-none w-full max-w-xs text-black bg-transparent outline-none "
            type="email"
            placeholder="Password"
          />
        </div>
        <label className="label">
          <span className="label-text-alt flex items-center">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs w-3 h-3"
            />
            <span className="pl-1">Remember me</span>
          </span>
          <span className="label-text-alt text-[10px]">Forget Password?</span>
        </label>
        <div className="text-center pt-5 ">
          <button className="btn bg-orange-500 text-white px-24 border-0 text-xl rounded-2xl">
            Login
          </button>
        </div>
        <p className="text-xs text-center pt-1">
          Don't have an account?<span className="underline">SignUp</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
