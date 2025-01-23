import React, { useState } from "react";

const NavBar = ({ lists }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);  // Cerrar el menú después de hacer clic
        }
    };

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
            <div className="relative z-50">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none active:text-teal-400 font-bold mr-4"
              >
                Más
              </button>

              {menuOpen && (
                <div className="absolute right-0 w-max mt-2 bg-gray-900 text-white font-bold rounded shadow-lg">
                    <ul>
                      {lists.map(list => (
                        <li key={list.id} className="px-12 py-4 hover:bg-gray-800 cursor-pointer" onClick={() => handleScrollToSection(list.id)}>
                          {list.title}
                        </li>
                      ))}
                    </ul>
               </div>
             )}
           </div>
         </nav>
       );
     };

export default NavBar;
