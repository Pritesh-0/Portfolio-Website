import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="z-20 fixed bg-gradient-to-r from-emerald-500 to-sky-500 w-full ">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex lg:items-center sm:flex-row">
                    <a class="flex-shrink-0 h-8 w-8 text-[#001219] text-4xl text-mono" href="/">
                        P_A0
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4 text-slate-800 text-semibold">
                            <a class=" focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#About">
                                About
                            </a>
                            <a class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Skills">
                                Skills
                            </a>
                            <a class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Achievements">
                                Achievements
                            </a>
                            <a class=" focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Projects">
                                Projects
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-slate-800">
                <a  class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#About">
                    About
                </a>
                <a  class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Skills">
                    Skills
                </a>
                <a  class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Achievements">
                    Achievements
                </a>
                <a  class="  focus:text-[#94d2bd] dark:text-white  hover:text-[#94d2bd] dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#Projects">
                    Projects
                </a>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar