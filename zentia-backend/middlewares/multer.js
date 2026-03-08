import multer from 'multer';


//to store file uploads like doctor pfp's
const storage = multer.diskStorage({
    filename: function(req,file,callback){  
        callback(null,file.originalname)
        //callback - func that MUST call to finish uploading; .origname saves file with same name
    }
})

const upload = multer({storage})

export default upload