import React from 'react';
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";

const MasterLayout = (props) => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 bg-body-secondary">
                        <NavBar/>
                    </div>
                    <div className="col-md-10">
                        {props.children}
                    </div>
                </div>


                {/*<Footer/>*/}
            </div>
        </>
    );
};

export default MasterLayout;