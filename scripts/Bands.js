/* 
objective:
    to import any needed data, define a function that iterates through said data to generate HTML, and export the function
    also, to create responsive web design with event listeners
*/

import { getBands, getBookings, getVenues, getBandMembers } from "./database.js"

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()
const bandMembers = getBandMembers()

document.addEventListener("click", (clickEvent) => {
    
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("band")) {
        
        //finding the band, setting to matchingBand
        const [,clickedBandId] = itemClicked.id.split("--")
        let matchingBand = null
        for (const band of bands) {
            if (band.id === parseInt(clickedBandId)) {
                matchingBand = band
            }
        }

        //finding all bookings that band is playing, pushing every venueId to matchingBookings
        const matchingBookings = []
        for (const booking of bookings) {
            if (matchingBand.id === booking.bandId) {
                matchingBookings.push(booking.venueId)
            }
        }

        //finding all members of the matchingBand, pushing each to matchingMembers, and then making a string out of it
        const makeBandMembersString = () => {
            const matchingMembers = []
            for (const bandMember of bandMembers) {
                if (bandMember.bandId === matchingBand.id) {
                    matchingMembers.push(bandMember)
                }
            }
    
            let bandMembersString = ''
            for (const bandMember of matchingMembers) {
                bandMembersString += `${bandMember.firstName} ${bandMember.lastName} (${bandMember.instrument})\n`
            }
            return bandMembersString
        }

        //finding all venues of matchingBookings, pushing each to matchingVenues, and then making a string out of it
        const makeVenuesString = () => {
            const matchingVenues = []
            for (const venue of venues) {
                for (const bookingVenueId of matchingBookings) {
                    if (bookingVenueId === venue.id) {
                        matchingVenues.push(venue.name)
                    }
                }
            }

            let venuesString = ""
                for (const venue of matchingVenues) {
                    venuesString += `${venue}\n`
                }
            return venuesString
        }

        let windowAlert = makeBandMembersString() + `\nUpcoming Shows:\n` + makeVenuesString()

        window.alert(windowAlert)
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