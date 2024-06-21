import './style.css'
import { NavLink } from 'react-router-dom';
import IEEE from '../../images/logos/IEEE.png'


const Navbar = ({home , aboutus , communityDetails , events , contactUs , gallery , login, news, upcomingEvents, pastEvents}) => {
    
    const scrollToTop = () => {
        window.scroll(0, 0);
    }

    const buttonClick = () => {
        const navBarID = document.getElementById("navBar")
        navBarID.classList.toggle("open")
    }

    return ( 
        <nav>
            <div className="navLogo"><img src={IEEE} alt="" /></div>
            <div className="navLinksContainer">
                <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ home }>Home</NavLink></div>
                <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ aboutus }>About Us</NavLink></div>
                <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ contactUs }>Contact Us</NavLink></div>
                <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ communityDetails }>Community Details</NavLink></div>
                {/* <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ gallery }>Gallery</NavLink></div> */}
                <div className="navLink"><NavLink onClick={() => {scrollToTop()}} to={ login }>Log In / Sign Up</NavLink></div>
            </div>
            <div className="navCollapsedNav" id='navBar'>
                <div className="navCollapsedNavButton" onClick={buttonClick}>
                    <div className="navBarCollpasedNavButtonDiv"></div>
                    <div className="navBarCollpasedNavButtonDiv"></div>
                    <div className="navBarCollpasedNavButtonDiv"></div>
                </div>
                <div className="navCollapsedNavLinks" >
                    <div className="navCollapsedNavLink"><NavLink onClick={() => scrollToTop()} to={ communityDetails }>Community Details</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={() => scrollToTop()} to={ events }>Events</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={() => scrollToTop()} to={ upcomingEvents }>Upcoming Events</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={() => scrollToTop()} to={ pastEvents }>Past Events</NavLink></div>
                    <div className="navCollapsedNavLink"><NavLink onClick={() => scrollToTop()} to={ news }>News</NavLink></div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;