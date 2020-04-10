import React from 'react';

const Footer = () => {
    return(
        <footer className="navbar footer is-fixed-bottom is-link">
            <div className="tabs is-centered is-fullwidth">
            <ul>
                <li>
                <a>
                    <i className="fa fa-home fa-2x white"></i> 
                </a>
                </li>
                <li>
                <a>
                    <i className="fa fa-ambulance fa-2x white"></i> 
                </a>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;