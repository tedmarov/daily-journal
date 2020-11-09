    /*
 *   Mood provider for Daily Journal application
 *
 *      Holds the raw data about each mood and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */


 // This is the original data.
let moods = []

 /*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(parsedMoods => {
            moods = parsedMoods
        })
}

export const useMoods =() => {
    return moods.slice()
}