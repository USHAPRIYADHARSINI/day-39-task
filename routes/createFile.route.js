import express from "express";
// const fs = require ("fs");
import fs from "fs";
import moment from "moment";

const router = express.Router();

router.post("/createnewfile", async function (req, res){
    try{// TO CREATE A NEW FILE OF ANY FORMAT
  
    // 24 Hour format
    // var date = (moment().format("MM/DD/YYYY"));
    var filename = (moment().format("DDMMYYYYHHmmss"));

    // 24 Hour format
    const time =(moment().format("HH:mm:ss"));

    console.log(filename, 'today')

    fs.writeFile(`./files/${filename}.txt`, time, (err)=>{
    console.log("created new file",filename );
    } );
    res.status(200).send("success")
    }catch(error){
        res.status(400).send("error occured in creating file",error)
    }
// fs.writeFile(`./newfile.txt`, time, (err)=>{
//     console.log("created");
// } );

})

router.get("/getfiles",async function (req, res){
   try{ 
        const folder = './files/';
        var textfiles = []
        fs.readdirSync(folder).forEach(file => {
        // console.log(file);
        var name = file.toString();
        var doctype = name.split(".").pop();
        var filtertype = "txt";
       
       if (doctype == filtertype){
        console.log(doctype,name)
        return textfiles.push(file)
        }else return 
        })
        res.send(textfiles)

    }catch(error){
        res.send("error occured", error)
    }
})

export default router ;

// try{
//     fs.readFileSync('files', 'utf8');
//     res.status(200).send("success", data)
// }catch(error){
//     res.send("error while compiling", error)
// }

// 12 Hour format
// const time = (moment().format("MM/DD/YYYY hh:mm:ss"));

// var unix = Math.round(+new Date()/1000);
// var milliseconds = new Date().getTime();
// var today = Date.now();
// console.log(new Date().toISOString());

// var filename = {$CurrentDate : { $type: "date" }}
// var content = {$CurrentDate : { $type: "timestamp" }}

// db.day39.updateOne