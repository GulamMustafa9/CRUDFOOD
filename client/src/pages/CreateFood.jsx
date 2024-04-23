import React from 'react';
import axios from "axios";
import MasterLayout from "../components/Shared/MasterLayout.jsx";
import {useNavigate} from "react-router-dom";
// import ListLoader from "../loader/list-loader.jsx";

const CreateFood = () => {
    let navigate = useNavigate();

    const CreateData = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let foodName = formData.get("foodName");
        let foodCode = formData.get("foodCode");
        let foodImage = formData.get("foodImage");
        let foodCategory = formData.get("foodCategory");
        let qty = formData.get("qty");
        let price = formData.get("price");

        try {
            await axios.post("http://localhost:3033/api/Create", {
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
            <form onSubmit={CreateData}>
                <div className="row">
                    <span className="allfood"> Create Food Item</span>
                    <div className="col-md-4">
                        <label>Food Name</label>
                        <input className="form-control form-control-sm " name="foodName"
                               placeholder="Enter Food Name" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Food Code</label>
                        <input className="form-control form-control-sm " name="foodCode"
                               placeholder="Enter Food Code" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Food Image</label>
                        <input className="form-control form-control-sm " name="foodImage"
                               placeholder="" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Food Category</label>
                        <input className="form-control form-control-sm " name="foodCategory"
                               placeholder="Enter Food Category" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Qty.</label>
                        <input className="form-control form-control-sm " name="qty"
                               placeholder="Enter Qty" type="number"/>
                    </div>
                    <div className="col-md-4">
                        <label>Price</label>
                        <input className="form-control form-control-sm " name="price"
                               placeholder="Enter Price" type="text"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success">Submit</button>
            </form>
            </div>
        </MasterLayout>
    );
};

export default CreateFood;