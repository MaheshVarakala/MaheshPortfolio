import Reac, { useState } from "react";
import profileImg from "../assets/profileImg.jpg";
import projects from "../assets/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div>
      <section className="min-h-screen flex text-white p-10 mt-20 bg-red-950 bg-blend-lighten shadow-lg shadow-red-500/50 backdrop-blur-md flex-col md:flex-row items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-2xl font-bold mb-4">
            Hi, I’m <span className="text-red-500">Mahesh</span> — Aspiring
            Front-End Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I am a passionate and self-motivated developer skilled in{" "}
            <span className="text-red-500 font-semibold">HTML</span>,{" "}
            <span className="text-red-500 font-semibold">CSS</span>,{" "}
            <span className="text-red-500 font-semibold">JavaScript</span>, and{" "}
            <span className="text-red-500 font-semibold">React</span>. <br />I
            love building responsive, user-friendly interfaces that deliver
            great experiences.
          </p>
          <p className="text-md md:text-lg text-gray-300 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="underline text-white font-bold">
                CURRENTLY SEEKING
              </span>
            </motion.div>
            A junior front-end developer opportunity where I can contribute,
            learn, and grow with a collaborative team.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-red-500 hover:bg-red-700 transition rounded-full px-6 py-3 font-semibold shadow-lg"
          >
            View My Projects
          </Link>
          {/* Contact Me Button */}
          <div className="mt-6">
            <button
              onClick={() => setShowContact(true)}
              className="bg-white text-red-700 font-bold px-6 py-2 rounded-full shadow-md hover:bg-red-100 transition duration-300"
            >
              Contact Me
            </button>
            {/* Contact Popup */}
            {showContact && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-6 relative p-[2px] rounded-2xl shadow-2xl max-w-xs mx-auto z-50 bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500 bg-[length:200%_200%] animate-gradient-x"
              >
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
  <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-yellow-300/30 animate-pulse blur-xl opacity-50"></div>
</div>
                {/* Inner content */}
                <div className="bg-red-500 text-white p-6 rounded-[14px]">
                  <button
                    onClick={() => setShowContact(false)}
                    className="absolute top-2 right-3 text-red-600 text-xl font-bold"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-semibold mb-2">
                    Mahesh Varakala
                  </h3>
                  
                  
                  <p className="text-sm">📧 mahesh_varakala@yahoo.com</p>
                  <a
            href="https://www.linkedin.com/in/mahesh-varakala-14702a75"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-sm hover:text-yellow-500"
          >
            www.linkedin.com/in/mahesh-varakala-14702a75
          </a>
                </div>
              </motion.div>
            )}
          </div>
          <div className="mt-10 flex justify-center space-x-4 gap-6 md:gap-8">
            <FaHtml5 size={32} title="HTML5" />
            <FaCss3Alt size={32} title="CSS3" />
            <FaReact size={32} title="React" />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt=""
            className="w-72 h-72 object-cover rounded-3xl border-4 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
