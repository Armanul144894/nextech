"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} className="border border-gray-300 shadow p-3 w-full rounded mb-4"/>
      <input {...register("Email")} className="border border-gray-300 shadow p-3 w-full rounded mb-4 text-black"/>
      <select {...register("gender")} className="border border-gray-300 shadow p-3 w-full rounded mb-4 text-black">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <input type="submit" />
    </form>
    </div>
  );
}
