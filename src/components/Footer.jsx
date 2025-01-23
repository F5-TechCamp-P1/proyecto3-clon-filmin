import React from 'react';
import { PiCatBold } from "react-icons/pi";


function Footer () {


    return (

        <footer className="bg-black px-4 py-3 flex items-center justify-between size">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white font-bold rounded shadow-lg">© 2025 <a href="https://github.com/F5-TechCamp-P1/proyecto3-clon-filmin" className="hover:underline"> PYMAR™</a>. All Rights Reserved.
            </span>
                <ul className="flex flex-wrap items-center mt-3 font-medium text-white font-bold rounded shadow-lg">
                    <li><a href="https://github.com/PFBregon">
                    <div className='cat-icon text-2xl hover:underline me-4 md:me-6'>
                        <PiCatBold />
                    </div></a></li>
                    <li><a href="https://github.com/YefGav">
                        <div className='cat-icon text-2xl  hover:underline me-4 md:me-6'>
                        <PiCatBold />
                    </div></a></li>

                    <li><a href="https://github.com/MabelRincon">
                        <div className='cat-icon text-2xl  hover:underline me-4 md:me-6'>
                        <PiCatBold />
                    </div></a></li>

                    <li><a href="https://github.com/Ayuik">
                        <div className='cat-icon text-2xl hover:underline me-4 md:me-6'>
                        <PiCatBold />
                    </div></a></li>

                    <li><a href="https://github.com/Angelica-2025">
                        <div className='cat-icon text-2xl hover:underline me-4 md:me-6 color-'>
                        <PiCatBold />

                    </div></a></li>

                </ul>
            </div>
        </footer>


    )

}

export default Footer
