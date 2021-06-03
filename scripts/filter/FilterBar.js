import { MoodFilter } from "./MoodFilter.js"
import { getMoods, useMoods } from "../mood/MoodProvider.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const filterTarget = document.querySelector(".formItems")
const eventHub = document.querySelector(".container")

export const FilterBar = () => {
    const render = () => {
        getMoods()
        .then(() => {
            const moods = useMoods()
            filterTarget.innerHTML = `
                ${MoodFilter(moods)}
            `
        }   
        )
    
    }

    render()
}


// const render = () => {
//     getMoods()
//     .then(() => {
//         const moods = useMoods()
//         render(moods)
//     })
//  }