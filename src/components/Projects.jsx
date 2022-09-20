import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'className='text-[#94d2bd] max-w-[600px] mt-[64px] w-full mx-auto text-left h-80'>
        <h1 className='text-[#94d2bd] text-4xl'>Projects:</h1>
        <div>
          <ul className='list-disc'>
            <li>
              <a href='https://github.com/Pritesh-0/Task-Scheduler' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'>Task Scheduler-Python</a>
            </li>
            <li>
              <a href='https://github.com/Pritesh-0/CLAP4-MiniProject' target="_blank" rel="noopener noreferrer" className='text-[#0a9396] text-2xl hover:text-[#e9d8a6]'>Notes Management System-C</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Projects