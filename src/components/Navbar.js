import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

class Navbar extends React.Component {

    render () {
        return (
            <div className="navbar">
              	<img src={logo} alt="Movie Box" className="nav__logo"/>
				<div className="nav__sections__wrapper">
					<div className="nav__section">
						<div className="nav__section__title">
							Browse
						</div>
						<ul className="nav__links">
							<li className="nav__link nav__link--active">Discover</li>
							<li className="nav__link">Browse All</li>
							<li className="nav__link">Watch Later</li>
						</ul>
					</div>
					<div className="nav__section">
						<div className="nav__section__title">
							By Category
						</div>
						<ul className="nav__links">
							<li className="nav__link">Action</li>
							<li className="nav__link">Adventure</li>
							<li className="nav__link">Comedy</li>
							<li className="nav__link">Drama</li>
							<li className="nav__link">Horror</li>
							<li className="nav__link">Mystery</li>
							<li className="nav__link">Romance</li>
						</ul>
					</div>
				</div>
            </div>
        );
    }

}

export default withRouter(Navbar);