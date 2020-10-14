/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 
import { journalEntryComponent } from "./JournalEntry.js"
import { useJournalEntries } from "./JournalDataProvider.js"


// DOM reference to where all entries will be rendered
export const entryLog = () => {
    const contentElement = document.querySelector(".entryLog")

    const entries = useJournalEntries()

    // Use the journal entry data from the data provider component

    let journalEntryHTML = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        journalEntryHTML += journalEntryComponent(entry)
    }



    contentElement.innerHTML += `
    <section class="entryLog">
    <div class="entryContainer">
        ${journalEntryHTML}
    </div>
    </section>
    `

}