/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journalEntryComponent = (entryObj) => {
    return `
    <div class="journalEntry">
        <p class="journal__id">ID: ${entryObj.id}</p>
        <p class="journal__date">Date: ${entryObj.date}</p>
        <p class="journal__concept">Concept: ${entryObj.concept}</p>
        <p class="journal__entry">Entry: ${entryObj.entry}</p>
        <p class="journal__mood">Mood: ${entryObj.mood}</p>
    </div>
    `
}