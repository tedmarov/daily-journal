/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 
import { journalEntryComponent } from "./JournalEntry.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"


// DOM reference to where all entries will be rendered
const contentElement = document.querySelector(".entryLog")

export const entryLog = () => {
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        render(entries)
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
        journalEntryHTML += journalEntryComponent(entry)
    }
    contentElement.innerHTML += `
    <div class="entryContainer">
        ${journalEntryHTML}
    </div>
    `

}