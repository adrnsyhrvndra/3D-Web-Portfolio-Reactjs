import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { multimedia } from '../constants';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Multimedia = () => {

  return (

    <div className='flex flex-row flex-wrap justify-center gap-10'>

      <motion.div variants={textVariant()}>

        <p className={`${styles.sectionSubText} text-center`}>

          Skill Praktis

        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>

          Multimedia

        </h2>

      </motion.div>

      <div className='mt-5 flex flex-wrap justify-center'>

        {multimedia.map((technology) => (

          <div className='w-28 h-28' key={technology.name}>
          
            <BallCanvas icon={technology.icon} />
            
          </div>

        ))}

      </div>

    </div>

  )

}

export default SectionWrapper(Multimedia,"");