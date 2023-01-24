/* 
objective:
    to import any needed data, define a function that iterates through said data to generate HTML, and export the function
    also, to create responsive web design with event listeners
*/

import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

document.addEventListener("click", (clickEvent) => {
    
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("band")) {
        
        const [,clickedBandId] = itemClicked.id.split("--")
        let matchingBand = null
        for (const band of bands) {
            if (band.id === parseInt(clickedBandId)) {
                matchingBand = band
            }
        }

        const matchingBookings = []
        for (const booking of bookings) {
            if (matchingBand.id === booking.bandId) {
                matchingBookings.push(booking.venueId)
            }
        }

        const matchingVenues = []
        const makeWindowAlert = () => {
            let windowAlert = ""
            if (matchingBookings.length > 1) {
                for (const venue of venues) {
                    for (let i = 0; i < matchingBookings.length; i++) {
                        if (matchingBookings[i] === venue.id) {
                            matchingVenues.push(venue.name)
                        }
                    }
                }
                windowAlert = `${matchingBand.name} is playing at ` + makeVenuesString()
            } else {
                for (const venue of venues) {
                    if (matchingBookings[0] === venue.id) {
                        windowAlert = `${matchingBand.name} is playing at ${venue.name}`
                    }
                }
            }
            return windowAlert
        }
        function makeVenuesString() {
            let multipleVenuesString = ""
            if (matchingBookings.length < 3) {
                multipleVenuesString = `${matchingVenues[0]} and ${matchingVenues[1]}`
            } else {
                for (let j = 0; j < (matchingVenues.length - 1); j++) {
                    multipleVenuesString += `${matchingVenues[j]}, `
                }
                const lastVenue = matchingVenues.length - 1
                multipleVenuesString += `and ${matchingVenues[lastVenue]}`
            }
            return multipleVenuesString
        }

        window.alert(makeWindowAlert())
    }
})

export const Bands = () => {
    let html = "<ul>"
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += "</ul>"
    return html
}