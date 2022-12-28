import React from 'react'
import { projects } from '../utils/data'
import CustomButton from './Shared/CustomButton'

const Projects = () => {

  const renderProjects = projects.map((project, i) => (
    <div className='uppercase mb-16 ' key={i}>
      <img className='w-full' src={project.image} alt={project.title} />
      <h1 className='font-bold pt-4 pb-2'>{project.title}</h1>
      <div className='flex space-x-2'>
        {
          project.stacks.map((val) => (
            <span>{val}</span>
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
          <CustomButton text={'Contact Me'} />
        </div>
        <div className='grid grid-cols-2 auto-rows-auto gap-x-[40px]	 '>
          {renderProjects}
        </div>
      </div>
    </section>
  )
}

export default Projects