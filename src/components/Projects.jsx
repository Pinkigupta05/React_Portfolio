import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects.
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className='rounded-md'
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 mt-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 rounded-md bg-neutral-800 text-purple-500 px-2 py-1 text-sm font-medium'
                >
                  {tech}
                </span>
              ))}
              <div className='mb-2 mt-2 pt-2'>
                {project.github && (
                  <a
                    href={project.github}
                    className='mr-2 rounded-md bg-green-900 text-white px-2 py-1'
                  >
                    Github
                  </a>
                )}
                {project.Youtube ? (
                  <a
                    href={project.Youtube}
                    className='mr-2 rounded bg-cyan-950 text-white px-2 py-1'
                  >
                    Youtube
                  </a>
                ) : null}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
