/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journalEntryComponent = (entryObj) => {
    return `
    <div id="entry-${entryObj.id}" class="journal__Entry">
    <p class="journal__date">Date: ${new Date(entryObj.dateOfEntry).toLocaleDateString('en-US')}</p>
    <p class="journal__concept">Concept: ${entryObj.concepts}</p>
    <p class="journal__entry">Entry: ${entryObj.entry}</p>
    <p class="journal__mood">Mood: ${entryObj.mood.label}</p>
    <button class="journal__delete" id="deleteEntry--${entryObj.id}">Delete Entry</button>
    </div>
    `
}