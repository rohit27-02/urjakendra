import Pdf from "../../models/Pdf"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
    let pdf = await Pdf.find({tag:req.body.tag})

    res.status(200).json(pdf)
}
export default connectDb(handler);