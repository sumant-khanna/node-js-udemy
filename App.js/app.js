const chalk = require("chalk")
const getNotes = require("./notes.js")
// // const fs = require("fs")

// // fs.writeFileSync("notes.txt" , "My Name is Sumant Khanna")
 
// const fs = require("fs")
// fs.appendFileSync("notes.txt", " Welcome to my Repository")

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.bold.green("Success")
console.log(greenMsg)