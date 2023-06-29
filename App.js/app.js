const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

yargs.version("1.0.0")
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note's Body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list a new note",
    handler(){
        notes.listNotes()
}
})

yargs.command({
    command: "read",
    describe: "Read a new note",
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: "String"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()