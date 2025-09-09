import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";
import { AiOutlineClose } from "react-icons/ai";
export const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleHandle = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <nav className="navbar">
            <div className="nav-logo">
                <p className="nav-logo-text">logo</p>
            </div>
                <div className="menu-toggle" onClick={toggleHandle}>
                    {isMenuOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        <ul className="mobile-nav-items">
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">Client</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">knowledge</a></li>
                            <li><button className="nav-contact">Contact</button></li>
                            <h1>contact</h1>
                            <p>+918103218161</p>
                            <p>ambersoni262@gmail.com</p> 
                        </ul> 

                        
                    </div>
                )}
            <div className="desktop-menu">
                <ul className="nav-items">
                    <li><a href="/">Work</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Client</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">knowledge</a></li>
                    <li><button className="nav-contact">Contact</button></li>
                </ul>
            </div>
            
                
           
        </nav>
        </>
    )
}