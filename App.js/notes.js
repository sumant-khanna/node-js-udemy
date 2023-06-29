const fs = require("fs")
const chalk = require("chalk")


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
//     const duplicateNotes = notes.filter(function(note){
//         return note.title === title
// })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    } else{
        console.log(chalk.red.inverse("Note title taken"))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesTokeep.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesTokeep)    
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
   
        
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse("Your Notes"))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJsON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch(e) {
        return[]
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
