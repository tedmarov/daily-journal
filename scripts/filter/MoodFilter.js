

export const MoodFilter = (moodCollection) => {
    return `
    <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${moodCollection.map(
                    moods => {
                        return `<input type="radio" name="moodFilter" value="${ moods.label }"/>
                        <label for="moodFilter--${moods.id}">${ moods.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
    `
}
