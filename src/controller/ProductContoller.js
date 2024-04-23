const ProductModel = require("../models/ProductModel");
exports.Create=async (req,res)=>{
    try{
        let reqBody=req.body;
        await ProductModel.create(reqBody);
        return res.status(200).json({status:"success", message:"Request Complete"});
    }
    catch (e){
        return res.status(200).json({err:e.toString()})
    }
}


exports.Read=async (req,res)=>{
    try{
        let rows=await ProductModel.find();
        return res.status(200).json({status:"success", message:"Request Complete", row:rows});
    }
    catch (e){
        return res.status(200).json({err:e.toString()})
    }
}
exports.ReadById = async (req, res) => {
    try {
        const { id } = req.params;
        const row = await ProductModel.findById(id); // Use findById to find a product by its ID

        if (!row) {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }

        return res.status(200).json({ status: "success", message: "Request Complete", row: row });
    } catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
};
// exports.ReadByID=async(req,res)=>{
//     try{
//         let {id}=req.params
//         let rows=await ProductModel.find({_id:id});
//         return res.status(200).json({status:"success",message:"Request Completed",row:rows});
//     }catch (e) {
//         return res.status(200).json({err:e.toString()})
//     }
// }


exports.Update=async (req,res)=>{
    try{
        let {id}=req.params
        let reqBody=req.body;
        //By ID OLD  -> NEW -> Compare --> Change Column Name- CurrentValue/NewValue/Date
        await ProductModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success", message:"Request Complete"});
    }
    catch (e){
        return res.status(200).json({err:e.toString()})
    }
}


exports.Delete=async (req,res)=>{
    try{
        let {id}=req.params
        //By ID OLD  -> NEW -> Compare --> Change Column Name- CurrentValue/NewValue/Date
        await ProductModel.deleteOne({_id:id});
        return res.status(200).json({status:"success", message:"Request Complete"});
    }
    catch (e){
        return res.status(200).json({err:e.toString()})
    }
}
