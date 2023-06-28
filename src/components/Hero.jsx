import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { zahidHasan, webBanner, worldmap } from '../assets';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={webBanner}
          alt="world map"
          className="w-full h-full sm:block hidden  object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={webBanner}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section style={{backgroundImage: `linear-gradient(135deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,-0.05) 60%)`}}
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'zahid ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'zahid hasan',
        1000,
        'zahid hasan noyon',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='sm:text-yellow-600 sm:text-[90px] 
      text-eerieBlack text-[50px] font-mova
      font-extrabold uppercase'
      repeat={Infinity}
    />
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              I am a junior and fresher MERN stack developer with a strong passion for coding and web development.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
             border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={zahidHasan}
            alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
