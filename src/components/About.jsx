import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {

  return (

    <Tilt className='xs:w-[250px] w-full'>

      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >

          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>

            {title}

          </h3>

        </div>

      </motion.div>

    </Tilt>

  )

};

const About = () => {

  return (

    <>
    
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>Perkenalan</p>

        <h2 className={styles.sectionHeadText}>Ringkasan.</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >

      Saya adalah seseorang yang memiliki minat dan passion yang besar di dalam dunia digital, khususnya di bidang web programming, graphic design, dan video editing. Sebagai basic skill, saya telah memperoleh kemampuan yang mumpuni dalam ketiga bidang tersebut dan terus mengembangkan diri untuk mencapai kemampuan yang lebih tinggi lagi.Saya merasa sangat antusias dan tertarik dalam mengembangkan situs web dan aplikasi yang memiliki tampilan yang menarik dan fungsional. Selain itu, saya juga memiliki kemampuan dalam membuat desain grafis yang menarik, mulai dari logo hingga desain poster atau brosur. Kemampuan video editing saya juga memungkinkan saya untuk membuat video yang mengesankan.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      
        {services.map((service, index) => (
          
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
        
      </div>

    </>

  )

};

export default SectionWrapper(About,'about');