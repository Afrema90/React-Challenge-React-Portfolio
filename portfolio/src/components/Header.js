import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a 
                    className="navbar-item"
                     rel="norefferer"
                     target="_blank"
                        href="github.com/Afrema90?tab=repositories"
                        >
                            <span className="content is-larg">Ama Frema</span>
                        </a>
                        </div>
                        </nav>
                        <Navigation
                         currentPage={currentPage} 
                         handlePageChange={handlePageChange}
                          />
                            {renderPage()}
                            <main>
                                </div>
    );
}

export default Header;
                         
          