import React from 'react';

const Header = () => {
    return (
        <div className="container border-bottom pt-2" >
            <div className="row">
                <div className="col-md-2 bg-body-secondary" >
                    <span className="crud"><i className="bi bi-c-circle-fill"> </i>CRUD Food</span>
                </div>
                <div className="col-md-10"></div>

            </div>

        </div>
    );
};

export default Header;