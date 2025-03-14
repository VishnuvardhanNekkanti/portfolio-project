import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import v1 from '../assets/v1.jpg'; 

const HomeSection = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTypingComplete(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  'Vishnu Vardhan Nekkanti',
                  () => setIsTypingComplete(true)
                ]}
                wrapper="span"
                cursor={isTypingComplete ? false : true}
                repeat={0}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            A passionate full-stack developer with expertise in Java, Spring Boot,
            React.js, and more. I love creating elegant solutions to complex
            problems and am constantly learning new technologies.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 mt-10 md:w-80 md:h-80 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 animate-pulse"></div>
            <img
               src={v1}
              alt="Vishnu Vardhan Nekkanti"
              className="rounded-full w-full h-full object-cover object-[0px_-30px] relative z-10 border-4 border-purple-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;