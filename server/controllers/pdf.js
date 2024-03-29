const Pdf = require("../models/Pdf");

const uploadNewPdf = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    if (!req.file)
        return res.status(404).json({ message: "pdf file not found" });
    const path = req.file.path.replace(/\\/g, '/');
    const fileName = name ? "updated_" + name + Date.now() : req.file.originalname
    try {
        const newPdf = new Pdf({
            userId: id,
            name: fileName,
            path,
        });

        const savedPdf = await newPdf.save();
        return res.status(201).json({ message: "pdf uploaded successfuly", data: savedPdf })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }

};

const getAllPdfs = async (req, res) => {
    const { id } = req.params;

    try {
        const pdfs = await Pdf.find({ userId: id }).sort({ createdAt: -1 });
        return res.status(200).json({ message: "All pdfs retrieved", data: pdfs });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

const getPdf = async (req, res) => {
    const { id } = req.params;

    try {
        const pdf = await Pdf.findById(id);
        if (!pdf) return res.status(404).json({ message: "pdf not found" });

        return res.status(200).json({ message: "pdf retrieved successfully", data: pdf });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
}

const removePdf = async (req, res) => {
    const { id } = req.params;
    try {
        const pdf = Pdf.findById(id);
        if (!pdf) return res.status(404).json({ message: "pdf not found" })
        await Pdf.findByIdAndDelete(id);
        return res.status(200).json({ message: "pdf deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

module.exports = {
    uploadNewPdf,
    getAllPdfs,
    getPdf,
    removePdf,


}