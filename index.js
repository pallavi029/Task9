const fs = require("fs");
fs.mkdirSync("Pallavi");//creating folder
fs.writeFileSync("Pallavi/bio.txt","Hey there!");//write in folder
fs.appendFileSync("Pallavi/bio.txt"," My name is Pallavi.");
a = fs.readFileSync("Pallavi/bio.txt");
console.log(a.toString())//read the file
fs.renameSync("Pallavi/bio.txt","Pallavi/MyBio.txt")//rename the file
fs.unlinkSync("Pallavi/MyBio.txt");//to delete file
fs.rmdirSync("Pallavi");//to delete Folder
