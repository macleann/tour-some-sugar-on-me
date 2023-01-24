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

        //finding the clicked venue, setting it to matchingVenue
        const [,clickedVenueId] = itemClicked.id.split("--")
        let matchingVenue = null
        for (const venue of venues) {
            if (venue.id === parseInt(clickedVenueId)) {
                matchingVenue = venue
            }
        }

        //finding all bookings at matchingVenue, pushing each booking's bandId to matchingBooking
        const matchingBookings = []
        for (const booking of bookings) {
            if (booking.venueId === matchingVenue.id) {
                matchingBookings.push(booking.bandId)
            }
        }

        //lines 37-76 are finding all bands of matchingBookings, pushing each band's name to matchingBands if there is more than one, and then printing them
        const matchingBands = []
        let windowAlert = ''

        //if statement for grammar syntax. lines 41-48  are pushing each band's name to matchingBands
        if (matchingBookings.length > 1) {
            for (const band of bands) {
                for (const booking of matchingBookings) {
                    if (booking === band.id) {
                        matchingBands.push(band.name)
                    }
                }
            }

            let multipleBandsString = ''
            
            //more grammar syntax, if statement for exactly 2 bands playing at the clicked venue
            if (matchingBookings.length < 3) {
                multipleBandsString = `${matchingBands[0]} and ${matchingBands[1]}`
            //else statement for 3 or more bands playing at the clicked venue, re: oxford comma
            } else {
                for (let i = 0; i < (matchingBands.length - 1); i++) {
                    multipleBandsString += `${matchingBands[i]}, `
                }
                const lastBand = matchingBands.length - 1
                multipleBandsString += `and ${matchingBands[lastBand]}`
            }

            //end of if statement for grammar syntax, see multiple bands "are" playing at the clicked venue
            windowAlert = multipleBandsString + ` are playing at ${matchingVenue.name}`

        //else statement for grammar syntax if only one band "is" playing at the clicked venue, note that matchingBands is not needed here
        } else {
            for (const band of bands) {
                if (matchingBookings[0] === band.id) {
                    windowAlert = `${band.name} is playing at ${matchingVenue.name}`
                }
            }
        }

        window.alert(windowAlert)
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