import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <div className="col-md-12">
                    <span className="menu">MENU</span>
                    <ul>
                        <li>
                            <Link to="/create" style={{marginBottom:"3px"}} className="btn btn-light btn-sm"><span><i className="bi bi-cart4"></i> Create Food</span></Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link"><span><i
                                className="bi bi-card-heading"></i> All Foods </span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;