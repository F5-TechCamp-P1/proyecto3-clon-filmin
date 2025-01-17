import React, { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="index.html" className="flex items-center">
                <img
                src="../src/assets/Logo_Filmin_2023.png"
                alt="Filmin Logo"
                className="h-6 ml-12 mt-1.5"
                />
            </a>

            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                Más
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Opción 1111
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Opción 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Opción 3
                        </li>
                    </ul>
               </div>
             )}
           </div>
         </nav>
       );
     };

     export default NavBar;
