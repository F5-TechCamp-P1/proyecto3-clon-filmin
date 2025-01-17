import React, { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="index.html" className="flex items-center">
                <img
                src="../src/assets/logo.svg"
                alt="Filmin Logo"
                className="h-6 ml-11 mt-1.5 mb-1.5"
                />
            </a>

            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none active:text-teal-400 font-bold mr-4"
              >
                Más
              </button>

              {menuOpen && (
                <div className="absolute right-0 w-max mt-2 bg-gray-900 text-white font-bold rounded shadow-lg">
                    <ul>
                        <li className="px-12 py-4 hover:bg-gray-800 cursor-pointer">
                            El mejor cine reciente en exclusiva
                        </li>
                        <li className="px-12 py-4 hover:bg-gray-800 cursor-pointer">
                            Series imprescindibles para todos los gustos
                        </li>
                        <li className="px-12 py-4 hover:bg-gray-800 cursor-pointer">
                            Las candidatas al Óscar internacional de 2024
                        </li>
                    </ul>
               </div>
             )}
           </div>
         </nav>
       );
     };

     export default NavBar;
