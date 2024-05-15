import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

            <nav>
                <div>
                    <div>
                        
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/add">Crear nueva publicacion</Link></li>
                            <li><Link to="https://github.com/Hrodriguez2019188" target='_blank'>Mi perfil</Link></li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};
