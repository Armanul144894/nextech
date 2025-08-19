"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginSection() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="px-8 text-white py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Login
      </button>
    </div>
  );
}
