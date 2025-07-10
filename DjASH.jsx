import React from "react";
import { motion } from "framer-motion";

export default function DJPortfolio() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source
          src="/mnt/data/vecteezy_digital-audio-spectrum-sound-wave-effect-animation-with-2d_9863296.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 z-20 bg-black bg-opacity-70 backdrop-blur-md">
        <h1 className="text-2xl font-bold">DJ Name</h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#work" className="hover:text-purple-400">Work</a></li>
          <li><a href="#about" className="hover:text-purple-400">About Us</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact Us</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="h-screen flex items-center justify-center z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4">Welcome to My DJ World</h2>
          <p className="text-xl">Feel the beat. Live the night.</p>
        </motion.div>
      </section>

      <section id="work" className="h-screen flex items-center justify-center z-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">My Work</h2>
          <p className="max-w-xl mx-auto">Check out my latest mixes, live shows, and remixes. Music that moves people.</p>
        </motion.div>
      </section>

      <section id="about" className="h-screen flex items-center justify-center z-20 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <div className="flex flex-col items-center">
            <img
              src="/your-photo.jpg"
              alt="DJ Profile"
              className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg mb-4"
            />
            <p className="max-w-md">I'm a passionate DJ who thrives on electrifying crowds with vibrant music. With years of experience spinning tracks at clubs and festivals, I bring energy and emotion to every set.</p>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center z-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
          <p>Email: your@email.com</p>
          <p>Instagram: @yourhandle</p>
        </motion.div>
      </section>
    </div>
  );
}
