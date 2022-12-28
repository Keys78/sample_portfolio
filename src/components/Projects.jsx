import React from 'react'
import { projects } from '../utils/data'
import CustomButton from './Shared/CustomButton'
import Tilt from "react-parallax-tilt";


const Projects = () => {

  const renderProjects = projects.map((project, i) => (
    <div className='uppercase mb-16 ' key={i}>
      <Tilt
        className="tilt"
        // tiltMaxAngleX={40}
        // tiltMaxAngleY={40}/
        // perspective={1000}
        transitionSpeed={1000}
        scale={1.0}
        gyroscope={false}
      >
        <img className='w-full rounded-md' src={project.image} alt={project.title} />
      </Tilt>
      <h1 className='font-bold pt-4 pb-2'>{project.title}</h1>
      <div className='flex space-x-2'>
        {
          project.stacks.map((val) => (
            <span key={val} className='md:text-[14px] text-[12px]'>{val}</span>
          ))
        }
      </div>
    </div>
  ))


  return (
    <section>
      <div className='page-wrapper mb-12'>
        <div className='flex items-start justify-between pb-16 pt-12'>
          <h1 className=' md:text-[80px] text-[32px] leading-none'>Projects</h1>
          <a href='https://github.com/Keys78' target={'_blank'}><CustomButton text={'Contact Me'} /></a>
        </div>
        <div className='sm:grid block grid-cols-2 auto-rows-auto gap-x-[40px]	 '>
          {renderProjects}
        </div>
      </div>
    </section>
  )
}

export default Projects