
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="pt-5">
            <footer className="footer">
                <div className="container text-center">
                    <span className="contact-info">© 2021 Eric Latham II, Melina Perraut, Dana Rin - <a
                        href="https://github.com/info340b-sp21/project-2" rel="noreferrer" target="_blank"
                        aria-label="Link to GitHub page" className="github-icon"><FontAwesomeIcon icon={faGithub} /></a> </span>
                </div>
            </footer>
        </div>
    )
}


export default Footer;