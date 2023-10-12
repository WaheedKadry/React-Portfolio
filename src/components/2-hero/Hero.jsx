// @ts-nocheck
import "./hero.css";
import Lottie from "lottie-react";
import landingPageAnimation from "../../../public/animation/landing page.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img src="../../../public/me.png" className="avatar" alt="" 
                initial={{transform:"scale(0)", opacity:0}}
        animate={{transform:"scale(1)", opacity:1}}
        transition={{damping:6, type:"spring", stiffness:100}}
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 className="title t1"
        initial={{transform:"scale(0)", opacity:0}}
        animate={{transform:"scale(1)", opacity:1}}
        transition={{duration:3}}
        >Waheed Kadry</motion.h1>
        <h1 className="title t2">Front End Developer</h1>
        <p className="sub-title">
          Hello, my name is waheed kadry, I am a web developer with 1 year
          experience in React.js Front End Web and enjoy building everything
          with JavaScript. During this time, I learned a lot of techniques,
          created many great websites, and collaborated with great developers.
          So I always seek an opportunity that matches my skills, to make the
          most of everything I have learned.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
       
        <Lottie
          className="contactAnimation"
          loop
          //  style={{ height: "355px" }}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.9);
          }}
          animationData={landingPageAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
