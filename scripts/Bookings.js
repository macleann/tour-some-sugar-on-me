/* 
objective:
    to import any needed data, define a function that iterates through said data to generate HTML, and export the function
    also, to create responsive web design with event listeners
*/

import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener("click", (clickEvent) => {

    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("booking")) {
        
        const [, clickedBookingId] = itemClicked.id.split("--")
        let matchingBooking = null
        for (const booking of bookings) {
            if (booking.id === parseInt(clickedBookingId)) {
                matchingBooking = booking
            }
        }

        for (const band of bands) {
            if (matchingBooking.bandId === band.id) {
                if (band.numOfMembers > 1) {
                    window.alert(`${band.name}\nGenre: ${band.genre}\nFormed in ${band.yearFormed}\n${band.numOfMembers} band members`)
                } else {
                    window.alert(`${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\nSolo act`)
                }
            }
        }
    }
})

export const Bookings = () => {
    let html = "<ul>"
    for (const venue of venues) {
        for (const band of bands) {
            for (const booking of bookings) {
                if ((booking.venueId === venue.id) && (booking.bandId === band.id)) {
                    html += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date.toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"})}</li>`
                }
            }
        }
    }
    html += "</ul>"
    return html
}