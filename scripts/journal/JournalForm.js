import { saveEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "../mood/MoodProvider.js"

const formTarget = document.querySelector(".contentContainer__left")
const eventHub = document.querySelector(".container")

const render = moods => {
    // debugger
    formTarget.innerHTML = `
    <h2 class="currentEvents">Current Events</h2> 
    <div class="formItems">
                <fieldset>
                    <label>Date of Entry</label>
                    <input id="journal--Date" type="date"/>
                </fieldset>
            </form>
                <fieldset>
                    <label>Concepts Covered</label>
                    <input id="journal--Concepts" type="text"/>
                </fieldset>    
            </form>
                <fieldset>
                    <label>Journal Entry</label>
                    <textarea id="journal--Entry" rows="3" cols="20"></textarea>
                </fieldset>    
            </form>
                <fieldset>
                    <label>Mood for the Day</label>
                    <select id="journal--Mood">
                        <option value="0">--Please choose an option--</option>
                        ${
                            moods.map(
                                moodObject => {
                                    return `<option value="${moodObject.id}">${moodObject.label}</option>`
                                }
                            ).join("")
                        }
                    </select>
            </fieldset>    
            <fieldset>
            <button id="submitJournalEntry">Submit Journal Entry</button>
            </fieldset>
            </form>
    </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitJournalEntry"){
        const dateOfEntry = document.querySelector("#journal--Date").value
        const concepts = document.querySelector("#journal--Concepts").value
        const entry = document.querySelector("#journal--Entry").value
        const moodId = parseInt(document.querySelector("#journal--Mood").value)
    
        const newEntry = {
            dateOfEntry,
            concepts,
            entry,
            moodId
        }
        saveEntry(newEntry)
    }
})

export const JournalForm = () => {
    getMoods()
        .then(() => {
            const moodObject = useMoods()
            render(moodObject)
            console.log(moodObject)
        })
}