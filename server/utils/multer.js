const  multer = require("multer");


// custome storage
const storage = multer.diskStorage({
    destination:function (req,file,cb){
       ("filee",file)
        cb(null,"pdfFiles")
    },
    filename:function (req,file,cb){
        const uniqueSuffix = Date.now();
        const {name} = req.body
        let filename= file.originalname
        if (!filename.endsWith('.pdf')) {  
           ("rannn") 
            filename=filename + '.pdf';
        }
       ("filename",filename)
        return cb(null , uniqueSuffix.toString() + filename)
      
        

    }
});

const uploadPdf = multer({storage:storage});

module.exports = uploadPdf