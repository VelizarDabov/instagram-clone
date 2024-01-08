"use client";
import React from "react";

import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 px-14 text-center bg-white  z-50 h-screen">
      <div className="flex flex-col border-solid border-2 border-blue-500 p-20 rounded-lg">
        <img
          className="w-50 h-20 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
        />
        <p className="paragraph">This is not a real app,</p>
        <p className="paragraph">it is build for education purposes only</p>

        <button
          type="submit"
          onClick={signIn}
          className="bg-blue-400 p-2 border rounded-md font-bold text-white"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
