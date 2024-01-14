import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled]= useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);    
    },[]);

    return (
        <Navbar expand="lg" className = { scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={'Logo.html'} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className='navbar-toggler-icon'></span>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={()=>console.log('connect')} /><span>Let's Connect</span>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}