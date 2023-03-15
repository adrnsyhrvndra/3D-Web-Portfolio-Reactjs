import React from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({index,name,description,tags,image,source_code_link,sub_heading,status}) => {

  return(

    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>

          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-18 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >

              {status.map((stat) => (

                <span 
                  key={`${name}-${stat.name}`}
                  className={`text-white text-xs font-medium px-2 py-0.5 rounded border-blue-100 ${stat.color}`}
                >

                  {stat.name}
                
                </span>

              ))}

            </div>

          </div>

        </div>

        <div className='mt-5'>

          <h3 className='text-white font-bold text-[24px]'>{name}</h3>

          <p className="text-base">{sub_heading}</p>

          <p className='mt-2 text-secondary text-[14px]'>{description}</p>

        </div>

        <div className='mt-4 flex flex-wrap gap-2'>

          {tags.map((tag) => (

            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >

              #{tag.name}

            </p>

          ))}

        </div>

      </Tilt>

    </motion.div>

  )

}
const Works = () => {

  return (

    <>

      <motion.div variants={textVariant()}>

        <p className={`${styles.sectionSubText} `}>My work</p>

        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

      </motion.div>

      <div className='w-full flex'>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >

          Sebagai seorang yang berdedikasi di bidang web programming, graphic design, dan video editing, saya telah menghasilkan banyak karya yang memukau. Setiap proyek yang saya kerjakan merupakan sebuah karya seni yang diciptakan dengan penuh kreativitas dan inovasi.

        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>

        {projects.map((project, index) => (

          <ProjectCard key={`project-${index}`} index={index} {...project} />

        ))}
        
        {/* <h1 className='text-2xl font-bold'>Soon I Will Add My All Project</h1> */}

      </div>

    </>

  )

}

export default SectionWrapper(Works,"");