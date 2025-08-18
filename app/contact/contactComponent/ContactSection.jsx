import { Input } from "postcss";
import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  // SVG Icons as components
  const ChevronDown = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  );

  const Menu = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const X = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const ArrowRight = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12,5 19,12 12,19"></polyline>
    </svg>
  );

  const Zap = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
    </svg>
  );

  const Shield = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z"></path>
    </svg>
  );

  const Globe = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12,2a15.3,15.3 0 0 1 4,10 15.3,15.3 0 0 1 -4,10 15.3,15.3 0 0 1 -4,-10 15.3,15.3 0 0 1 4,-10z"></path>
    </svg>
  );

  const Award = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
    </svg>
  );

  const Users = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17,21v-2a4,4 0 0 0-4-4H5a4,4 0 0 0-4,4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23,21v-2a4,4 0 0 0-3-3.87"></path>
      <path d="M16,3.13a4,4 0 0 1 0,7.75"></path>
    </svg>
  );

  const Star = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
    </svg>
  );

  const Phone = ({ size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22,16.92v3a2,2 0 0 1-2.18,2 19.79,19.79 0 0 1-8.63-3.07 19.5,19.5 0 0 1-6-6 19.79,19.79 0 0 1-3.07-8.67A2,2 0 0 1,4.11,2h3a2,2 0 0 1,2,1.72 12.84,12.84 0 0 0,.7,2.81 2,2 0 0 1-.45,2.11L8.09,9.91a16,16 0 0 0,6,6l1.27-1.27a2,2 0 0 1,2.11-.45 12.84,12.84 0 0 0,2.81.7A2,2 0 0 1,22,16.92z"></path>
    </svg>
  );

  const Mail = ({ size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4,4h16c1.1,0 2,.9 2,2v12c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V6c0-1.1.9-2,2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const MapPin = ({ size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21,10c0,7-9,13-9,13s-9-6-9-13a9,9 0 0 1,18,0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const Facebook = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const Twitter = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  const Instagram = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );

  const Linkedin = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are pioneers in digital transformation, combining cutting-edge
              technology with strategic thinking to help businesses thrive in
              the digital age.
            </p>
            <div className="space-y-8">
              {[
                { icon: Phone, text: "+1 (555) 123-4567", title: "Phone" },
                { icon: Mail, text: "hello@nextech.com", title: "Email" },
                { icon: MapPin, text: "New York, NY", title: "Location" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 shadow p-5 rounded"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">
                        {stat.title}
                      </div>
                      <div className="text-gray-400">{stat.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
              <div className="space-y-4">
                {/* <form>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="block mb-2 font-bold text-gray-100"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Put in your Name."
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="email"
                      className="block mb-2 font-bold text-gray-100"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="eamil"
                      placeholder="Put in your Email."
                      className="border border-gray-300 text-black shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="message"
                      className="block mb-2 font-bold text-gray-100"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Put in your valuable Comments."
                      className="border border-gray-300 text-black shadow p-3 w-full rounded mb-"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-12 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Submit
                  </button>
                </form> */}
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
