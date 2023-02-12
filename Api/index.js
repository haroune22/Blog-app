const express =require("express")
const app = express()
require('dotenv').config()
require ("./Config/db").connect();
const PORT = process.env.PORT ;
const apiRoutes = require("./Routes/index");
const multer = require('multer');
const cors = require("cors");
const path = require('path')
const Origign_url =process.env.Origign_url

app.use(cors({
    origin:Origign_url,
}));
app.use("/Images",express.static(path.join(__dirname,"/Images")))

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"Images");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})

app.use(express.json())
app.use("/api",apiRoutes())

app.listen(PORT,()=> console.log(`Backend is running on PORT ${PORT}`))