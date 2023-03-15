import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies,certificate } from '../constants';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { textVariant,fadeIn } from "../utils/motion";

const Tech = () => {

  return (

    <div className='flex flex-row flex-wrap justify-center gap-10'>

      <motion.div variants={textVariant()}>

        <p className={`${styles.sectionSubText} text-center`}>

          Skill Praktis

        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>

          This Is All Of My Skills

        </h2>

      </motion.div>

      <motion.div variants={fadeIn()} className='mt-5 flex flex-wrap justify-center'>

        <div className=" p-4 rounded-lg md:p-8 bg-tertiary" id="stats" role="tabpanel" aria-labelledby="stats-tab">

          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">

            {technologies.map((technology) => (

                  <div className="flex flex-col items-center justify-center text-center" key={technology.name}>

                      <img className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300" src={technology.icon} alt="Bordered avatar"/>

                      <dd className="font-light text-white mt-2">{technology.name}</dd>

                  </div>
                  
            ))}

          </dl>

        </div>
        
        {/* <div className='w-28 h-28'>
        
          <BallCanvas icon={technology.icon} />

        </div> */}

      </motion.div>

    </div>

  )

}

export default SectionWrapper(Tech,"");