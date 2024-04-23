import React, { useEffect, useState } from 'react';
import axios from "axios";
import MasterLayout from "../components/Shared/MasterLayout.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";

const UpdatePage = () => {

    let navigate = useNavigate();
    let { id } = useParams();

    const [Existing, setExisting] = useState(null);

    console.log("Existing state:", Existing);

    const fetchExistingData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3033/api/ReadById/${id}`);
            console.log("API Response:", response.data);
            const rowData = response.data.row; // Access 'row' property directly
            console.log("Existing Data:", rowData);
            setExisting(rowData); // Update the state using setExisting
        } catch (error) {
            console.error("Error fetching existing data:", error);
            // Handle error appropriately, such as displaying a message to the user
        }
    };

    useEffect(() => {
        fetchExistingData(id);
    }, []);

    console.log("Existing state:", Existing);

    // Rest of your component code...

    const UpdateData = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let foodName = formData.get("foodName");
        let foodCode = formData.get("foodCode");
        let foodImage = formData.get("foodImage");
        let foodCategory = formData.get("foodCategory");
        let qty = formData.get("qty");
        let price = formData.get("price");

        try {
            await axios.post(`http://localhost:3033/api/Update/${id}`, {
                foodName: foodName,
                foodCode: foodCode,
                foodImage: foodImage,
                foodCategory: foodCategory,
                qty:qty,
                price:price
            });

            navigate("/");
        } catch (error) {
            console.error("Error creating data:", error);
            // Handle error appropriately, such as displaying a message to the user
        }
    };


    return (
        <MasterLayout>
            <div className="container mt-5">
                {Existing !== null && (
                    <form onSubmit={UpdateData}>
                        <div className="row">
                            <span className="allfood"> Update Food Item</span>
                            <div className="col-md-6">
                                <label>Food Name</label>
                                <input className="form-control form-control-sm "
                                       defaultValue={Existing ? Existing['foodName'] : ''}
                                       name="foodName"
                                       type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label>Food Code</label>

                                <input className="form-control form-control-sm "
                                    // defaultValue={Existing!==null? Existing['productName']:''}
                                       defaultValue={Existing ? Existing['foodCode'] : ''}
                                       name="foodCode"
                                       type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label>Food Image</label>
                                <input className="form-control form-control-sm "
                                       defaultValue={Existing ? Existing['foodImage'] : ''}
                                       name="foodImage"
                                       type="text"/>
                            </div>

                            <div className="col-md-6">
                                <label>Food Category</label>
                                <input className="form-control form-control-sm "
                                       defaultValue={Existing ? Existing['foodCategory'] : ''}
                                       name="foodCategory"
                                       type="text"/>
                            </div>
                            <div className="col-md-6">
                                <label>QTY.</label>
                                <input className="form-control form-control-sm "
                                       defaultValue={Existing ? Existing['qty'] : ''}
                                       name="qty"
                                       type="number"/>
                            </div>
                            <div className="col-md-6">
                                <label>Price</label>
                                <input className="form-control form-control-sm "
                                       defaultValue={Existing ? Existing['price'] : ''}
                                       name="price"
                                       type="number"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-sm mt-3 btn-success">Submit</button>
                    </form>
                )}
            </div>
        </MasterLayout>
    );
};

export default UpdatePage;