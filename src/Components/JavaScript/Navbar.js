import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';
import logo from '../images/DevSPR.svg'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0 text-authentic">Developers Kite</h1>
            </Link>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link hover-effect">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link hover-effect">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link hover-effect">Contact Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hover-effect" data-bs-toggle="dropdown">Services</a>
                        <ul className="dropdown-menu custom-dropdown">
                            <li><Link to="/awsservices" className="dropdown-item">Cloud Services</Link></li>
                            <li><Link to="/networkSolutions" className="dropdown-item">Network Solutions</Link></li>
                            <li><Link to="/ITSupport" className="dropdown-item">IT Supports</Link></li>
                            <li><Link to="/DevelopmentSupport" className="dropdown-item">Development Suports</Link></li>
                            <li><Link to="/SecuritySolution" className="dropdown-item">Security Solutions</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <form className="d-flex search-form" onSubmit={handleSearch}>
                            <div className="search-wrapper">
                                <input
                                    type="search"
                                    className="form-control custom-search"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="btn btn-search" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
                <Link to="/Contact" className="btn btn-custom-primary ms-3 d-none d-lg-block">
                    Join Us<i className="fa fa-arrow-right ms-2"></i>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;