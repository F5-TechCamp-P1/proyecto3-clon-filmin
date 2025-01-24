import { useState } from 'react';
import PropTypes from "prop-types";
const NavBar = ({ lists }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
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
                className="text-white focus:outline-none active:text-teal-400 font-bold mr-4 flex items-center"
              >
                Más
                <img
                        src="../src/assets/chevron-down-30.png"
                        alt="Toggle Menu"
                        className={`ml-2 transform ${menuOpen ? 'rotate-180' : ''} transition-transform w-3 h-3`}
                    />
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

NavBar.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
 };

export default NavBar;
