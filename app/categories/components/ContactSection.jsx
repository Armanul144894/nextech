import React from "react";

export default function ContactSection() {
  // SVG Icons
  const Phone = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
    >
      <path d="M22,16.92v3a2,2 0 0 1-2.18,2 19.79,19.79 0 0 1-8.63-3.07 19.5,19.5 0 0 1-6-6 19.79,19.79 0 0 1-3.07-8.67A2,2 0 0 1,4.11,2h3a2,2 0 0 1,2,1.72 12.84,12.84 0 0 0,.7,2.81 2,2 0 0 1-.45,2.11L8.09,9.91a16,16 0 0 0,6,6l1.27-1.27a2,2 0 0 1,2.11-.45 12.84,12.84 0 0 0,2.81.7A2,2 0 0 1,22,16.92z"></path>
    </svg>
  );

  const Mail = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
    >
      <path d="M4,4h16c1.1,0 2,.9 2,2v12c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V6c0-1.1.9-2,2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const MapPin = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
    >
      <path d="M21,10c0,7-9,13-9,13s-9-6-9-13a9,9 0 0 1,18,0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
  return (
    <div>
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Have Questions About Our Categories?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you choose the right services for your
            business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 text-center">
              <div className="flex justify-center mb-3">
                <Phone/>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 text-center">
              <div className="flex justify-center mb-3">
                {" "}
                <Mail/>
              </div>

              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">hello@nextech.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700">
              <div className="flex justify-center mb-3">
                <MapPin/>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">New York, NY</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
