/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 
import { journalEntryComponent } from "./JournalEntry.js"
import { getEntries, useJournalEntries, deleteEntry } from "./JournalDataProvider.js"
import { getMoods } from "../mood/MoodProvider.js"

// DOM reference to where all entries will be rendered
const contentElement = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => entryLog())

export const entryLog = () => { 
    getEntries()
    .then(getMoods)
    .then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)
    // Use the journal entry data from the data provider component
    })
}

const render = (entries) => {    
    let journalEntryHTML = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        journalEntryHTML += `
        <div class="entryContainer">
            ${journalEntryComponent(entry)}
        </div>
    `
}
    contentElement.innerHTML = journalEntryHTML
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteEntry(id).then(
           () => {
               const updatedEntries = useJournalEntries()
               render(updatedEntries)
           }
       )
    }
})