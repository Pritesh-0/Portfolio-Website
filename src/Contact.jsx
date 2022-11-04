import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiAtSign, FiMeh} from 'react-icons/fi';

const Contact = () => {
  return (
    <footer class="bg-[#001219] dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
        <div class="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a  href="https://github.com/Pritesh-0" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            </button>
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <a  href="https://www.linkedin.com/in/pritesh-a0/" type="a" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
            </button>
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <a href="https://twitter.com/Pritesh_A0" target="_blank" rel="noopener noreferrer"><FiTwitter/></a>
            </button>
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <a href="https://www.instagram.com/pritesh_a0/" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
            </button>
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <a href='mailto:priteshagrawal0@gmail.com'><FiAtSign/></a>
            </button>
            <button class='hover:text-[#e9d8a6] text-[#94d2bd] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a  href="https://drive.google.com/file/d/133PFan-BBX9pzUOp65vvHJXZwJIBSxYS/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FiMeh /></a>
            </button>
        </div>

</footer>
  )
}

export default Contact