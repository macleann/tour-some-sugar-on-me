/* 
objective:
    to import any needed data, define a function that iterates through said data to generate HTML, and export the function
    also, to create responsive web design with event listeners
*/

import { getVenues, getBookings, getBands } from "./database.js"

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener("click", (clickEvent) => {
    
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("venue")) {

        const [,clickedVenueId] = itemClicked.id.split("--")
        let matchingVenue = null
        for (const venue of venues) {
            if (venue.id === parseInt(clickedVenueId)) {
                matchingVenue = venue
            }
        }

        const matchingBookings = []
        for (const booking of bookings) {
            if (booking.venueId === matchingVenue.id) {
                matchingBookings.push(booking.bandId)
            }
        }

        const matchingBands = []
        const makeWindowAlert = () => {
            let windowAlert = ''
            if (matchingBookings.length > 1) {
                for (const band of bands) {
                    for (let i = 0; i < matchingBookings.length; i++) {
                        if (matchingBookings[i] === band.id) {
                            matchingBands.push(band.name)
                        }
                    }
                }
                windowAlert = makeBandsString() + ' are playing this venue'
            } else {
                for (const band of bands) {
                    if (matchingBookings[0] === band.id) {
                        windowAlert = `${band.name} is playing this venue`
                    }
                }
            }
            return windowAlert
        }
        function makeBandsString() {
            let multipleBandsString = ''
            if (matchingBookings.length < 3) {
                multipleBandsString = `${matchingBands[0]} and ${matchingBands[1]}`
            } else {
                for (let j = 0; j < (matchingBands.length - 1); j++) {
                    multipleBandsString += `${matchingBands[j]}, `
                }
                const lastBand = matchingBands.length - 1
                multipleBandsString += `and ${matchingBands[lastBand]}`
            }
            return multipleBandsString
        }

        window.alert(makeWindowAlert())
    }
})

export const Venues = () => {
    let html = '<ul>'
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += '</ul>'
    return html
}