import Pdf from "../../models/Pdf"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
       console.log(req.body)
            let pdf = new Pdf({
                name: req.body.name,
                tag: req.body.tag,
                file:req.body.file
            })
            await pdf.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);