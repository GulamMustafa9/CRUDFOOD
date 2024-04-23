import React from 'react';

const ListLoader = () => {
    return (
       <div className="container-fluid">
           <div className="rwo d-flex justify-content-center">
               <div className="col-md-12 text-center">
                   <div className="spinner-border" role="status">
                       <span className="visually-hidden">Loading...</span>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default ListLoader;