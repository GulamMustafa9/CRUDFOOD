import React, {useEffect, useState} from 'react';
import axios from "axios";
import MasterLayout from "../components/Shared/MasterLayout.jsx";
import {Link} from "react-router-dom";
import ListLoader from "../loader/list-loader.jsx";

const AllFood = () => {

    const [Data,SetData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, []);


    const ReadData=async ()=>{
        let res=await axios.get("http://localhost:3033/api/Read");
        SetData(res.data['row'])
    }

    const DeleteData=async (id)=>{
        let r=await axios.get(`http://localhost:3033/api/Delete/${id}`);
        console.log(r)
        await ReadData()
    }


    return (
        <MasterLayout>
            <div className="container">
                <div className="row">
                    <span className="allfood"> All Food List</span>
                    {Data.length === 0 ? (
                        <ListLoader/>
                    ) : (
                        Data.map((item, i) => (
                    <div className="col-md-4">
                        <table>
                                    <tr key={i}>
                                        <td>
                                            <div className="card" style={{width: "11rem"}}>
                                                <img
                                                    src={item['foodImage']}
                                                    className="card-img-top" style={{height: "7rem"}} alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item['foodName']}</h5>
                                                    <h5 className="card-title">Price:{item['price']}</h5>
                                                    <p className="card-text">{item['foodCategory']}</p>
                                                    <Link to={`/update/${item['_id']}`}
                                                          className="btn btn-sm btn-outline-success btnme">Edit</Link>
                                                    <button onClick={() => DeleteData(item['_id'])}
                                                            className="btn btn-sm btn-outline-danger btnme">Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                        </table>
                    </div>
                        ))
                    )}
                </div>
            </div>
        </MasterLayout>
    );
};

export default AllFood;