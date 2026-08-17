import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className=" text-white py-16 px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Location */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="text-3xl text-purple-400 mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400">Domjur,Howrah</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="text-3xl text-purple-400 mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">soumyajitmalakar@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="text-3xl text-purple-400 mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+91 9836254813</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-12" />

        {/* Follow Me Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Follow Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/student-soumyajit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/soumyajit-malakar-553934346"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.facebook.com/share/197UK4ci2D/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-110"
              title="Facebook"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.instagram.com/soumya_the_altruistic?igsh=MXAybm81eXBzN2E4dg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-110"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            © 2026 Soumyajit malakar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
