import { Link } from 'react-scroll';
import logo from "../images/ASLogo.png";
import AngleDownIcon from "../images/angle-small-down.svg";
import menu from '../images/menu.png';
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navBar shadow-md">
            <button className='group h-20 w-20 rounded-lg border-2 border-black sm:hidden' onClick={toggleMenu}>
                <div className="grid justify-items-center gap-1.5 ">
                    <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`h-1 w-8 rounded-full bg-black transition-all duration-300 ${isOpen ? 'scale-x-0' : ''}`}></span>
                    <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>

            <div className='logo1'>
                <Link to="home" className='logo'>
                    <img src={logo} alt="AS" id="imgLogo" />
                    <h2 id='portxt'>Portfolio</h2>
                </Link>
            </div>

            <div className={`linkSection ${isOpen ? "open" : "hidden"}`}>
                <Link to="home" smooth={true} duration={500} offset={-120} className='nav-link w-full' onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="about" smooth={true} duration={500} offset={-150} className='nav-link w-full' onClick={() => setIsOpen(false)}>About</Link>
                <Link to="projects" smooth={true} duration={500} offset={-100} className='nav-link w-full' onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="skills" smooth={true} duration={500} offset={-100} className='nav-link' onClick={() => setIsOpen(false)}>Skills</Link>
                <Link to="contact" smooth={true} duration={500} offset={-100} className='nav-link' onClick={() => setIsOpen(false)}>Contact</Link>
                <a href="https://drive.google.com/file/d/1KJys3RSuKcndqKC2Ty4H7QkEgSFH0my3/view?usp=drivesdk" target='_blank'>
                    <button className='btn' onClick={() => setIsOpen(false)}>Resume</button>
                </a>
            </div>
        </nav >
    )
}

export default Navbar;