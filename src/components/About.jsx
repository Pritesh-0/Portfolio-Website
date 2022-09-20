import React from 'react'
import me from '../assets/me.jpeg'

const About = () => {
  return (
    <div id='About' className='text-[#94d2bd] max-w-[800px] mt-[10px] w-full mx-auto text-left h-screen'>
        <div className='max-w-[800px] mt-[10px] md:ml-4 sm:text-center h-screen mx-auto lg:text-left flex flex-col justify-center'>
            <h1 className='text-[#94d2bd] text-4xl'>About&#x3a;</h1>
              <img alt="profil" src={me} class="my-16 object-cover rounded h-40 w-40"/>
            <p class='capitalize text-[#0a9396] text-2xl '>
            hello! my name is pritesh agrawal, i am from indore, currently in my second year of enginnering in cs, i like to code, i enjoy learning new technologies and implementing them. currently i am focused on competitive coding and development and exploring new things like designing.
            i am also very interested in the fields like electronics, mechanical and astrophysics, i do get very facinated by these. also, i am obsessed with 
            <a className='px-2 hover:text-[#94d2bd]' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer">Rickrolls</a>.  
            </p>
            
        </div>
    </div>
  )
}

export default About