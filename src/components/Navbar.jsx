import React from 'react'
import {Link} from 'react-scroll';
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div>
    <nav class="z-20 fixed bg-gradient-to-r from-emerald-500 to-sky-500 w-full ">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex lg:items-center sm:flex-row">
                    <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 1
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration:1.1
                    }}
                    class="cursor-pointer flex-shrink-0 h-8 w-8 text-[#001219] text-4xl text-mono" ><Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
                        P_A0
                    </Link></motion.div>
                    <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 1
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration:1.1
                    }}
                    class="hidden md:block">
                        <div class="cursor-pointer ml-10 flex items-baseline space-x-4 text-slate-800 text-semibold">
                            <Link to="About" spy={true} smooth={true} offset={0} duration={500}  className=" focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                            <Link to="Skills" spy={true} smooth={true} offset={0} duration={500} className="  focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium">
                                Skills
                            </Link>
                            <Link to="Achievements" spy={true} smooth={true} offset={0} duration={500} className="  focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium">
                                Achievements
                            </Link>
                            <Link to="Projects" spy={true} smooth={true} offset={0} duration={500} className=" focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium">
                                Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                
            </div>
        </div>
        <div class="md:hidden">
            <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 1
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration:1.5
            }}
            class="cursor-pointer px-2 pt-2 pb-3 space-y-1 sm:px-3 text-slate-800">
                <Link to="About" spy={true} smooth={true} offset={0} duration={500} className="focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium">
                    About
                </Link>
                <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}  className="  focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium" href="/#Skills">
                    Skills
                </Link>
                <Link to="Achievements" spy={true} smooth={true} offset={-50} duration={500}  className="  focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium" href="/#Achievements">
                    Achievements
                </Link>
                <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}  className="  focus:text-[#94d2bd] hover:text-[#94d2bd] px-3 py-2 rounded-md text-sm font-medium" href="/#Projects">
                    Projects
                </Link>
            </motion.div>
        </div>
    </nav>
</div>
  )
}

export default Navbar