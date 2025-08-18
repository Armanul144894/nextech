"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name" className="block mb-2 font-bold text-gray-100">
          Name
        </label>
        <input
          className="border border-gray-300 shadow p-3 w-full rounded mb-4 text-black"
          {...register("firstName", { required: true })}
        />
        <label for="name" className="block mb-2 font-bold text-gray-100">
          Email
        </label>
        <input
          className="border border-gray-300 shadow p-3 w-full rounded mb-4 text-black"
          {...register("mail", { required: "Email Address is required" })}
        />
        <label for="name" className="block mb-2 font-bold text-gray-100">
          Messages
        </label>
        <textarea
          name=""
          id=""
          className="border border-gray-300 shadow p-3 w-full rounded mb-4 text-black"
          rows="4"
        ></textarea>
        <input
          type="submit"
          className="px-12 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        />
      </form>
    </div>
  );
}
