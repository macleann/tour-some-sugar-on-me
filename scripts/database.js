/* 
objective:
    to store all needed data as objects within subarrays and export it for use in the corresponding module
algorithm:
    define database object
                venues array containing venue objects
                    properties:
                        id
                        name
                        address
                        squareFeet
                        maxOcc
                bands array containing band objects
                    properties:
                        id
                        name
                        numOfMembers
                        genre
                        yearFormed
                bookings array containing booking objects
                    properties
                        id
                        venueId
                        bandId
                        date
            define and export the following functions:
                getVenues, getBands, getBookings, no parameters needed, that return appropriate venues/bands/bookings map with spread operator
*/

//not mentioned above or in the readme, but for the purposes of this exercise, I'm going to define year, month, and day functions that, when invoked, will generate a random number in a range

const month = () => {
    return Math.floor(Math.random() * (11 - 0) + 0)
}

const day = () => {
    return Math.floor(Math.random() * (31 - 1) + 1)
}

const database = {
    venues: [{
        id: 1,
        name: 'The End',
        address: '123 Elliston Place',
        squareFeet: 10000,
        maxOcc: 150
    },{
        id: 2,
        name: 'Exit/In',
        address: '456 Elliston Place',
        squareFeet: 15000,
        maxOcc: 300
    },{
        id: 3,
        name: 'Basement East',
        address: '123 Woodland Avenue',
        squareFeet: 20000,
        maxOcc: 450
    },{
        id: 4,
        name: 'Basement',
        address: '123 8th Ave S',
        squareFeet: 25000,
        maxOcc: 600
    },{
        id: 5,
        name: 'Brooklyn Bowl',
        address: '123 3rd Ave N',
        squareFeet: 30000,
        maxOcc: 750
    },{
        id: 6,
        name: 'Dee\'s Country Cocktail Lounge',
        address: '102 E Palestine Ave',
        squareFeet: 35000,
        maxOcc: 900
    },{
        id: 7,
        name: 'The East Room',
        address: '123 Gallatin Pk',
        squareFeet: 40000,
        maxOcc: 1050
    },{
        id: 8,
        name: 'Cobra',
        address: '456 Gallatin Pk',
        squareFeet: 45000,
        maxOcc: 1200
    },{
        id: 9,
        name: 'Marathon Music Works',
        address: '1402 Clinton St',
        squareFeet: 50000,
        maxOcc: 1350
    }],
    bands: [{
        id: 1,
        name: 'Crungie Bungo',
        numOfMembers: 3,
        genre: 'Crust Punk',
        yearFormed: 1999
    },{
        id: 2,
        name: 'Goths, ltd.',
        numOfMembers: 2,
        genre: 'Scene',
        yearFormed: 2003
    },{
        id: 3,
        name: 'In Excess',
        numOfMembers: 4,
        genre: 'New Wave',
        yearFormed: 1984
    },{
        id: 4,
        name: 'Josh Handsomeman',
        numOfMembers: 1,
        genre: 'Singer/Songwriter',
        yearFormed: 2012
    },{
        id: 5,
        name: '1o6.7',
        numOfMembers: 1,
        genre: 'Electronic',
        yearFormed: 2007
    },{
        id: 6,
        name: 'Sublime and Paris Hilton',
        numOfMembers: 4,
        genre: 'Ska/Pop',
        yearFormed: 2011
    },{
        id: 7,
        name: 'Grizzlegrangle and the Terrorbirds',
        numOfMembers: 7,
        genre: 'Psych Rock',
        yearFormed: 2015
    },{
        id: 8,
        name: 'Dom Bates',
        numOfMembers: 1,
        genre: 'Alternative',
        yearFormed: 1974
    },{
        id: 9,
        name: 'Blue Cold Bell Peppers',
        numOfMembers: 4,
        genre: 'Rock',
        yearFormed: 1983
    }],
    bookings: [{
        id: 1,
        venueId: 9,
        bandId: 1,
        date: new Date(2023, month(), day())
    },{
        id: 2,
        venueId: 8,
        bandId: 2,
        date: new Date(2023, month(), day())
    },{
        id: 3,
        venueId: 7,
        bandId: 3,
        date: new Date(2023, month(), day())
    },{
        id: 4,
        venueId: 6,
        bandId: 4,
        date: new Date(2023, month(), day())
    },{
        id: 5,
        venueId: 5,
        bandId: 5,
        date: new Date(2023, month(), day())
    },{
        id: 6,
        venueId: 4,
        bandId: 6,
        date: new Date(2023, month(), day())
    },{
        id: 7,
        venueId: 3,
        bandId: 7,
        date: new Date(2023, month(), day())
    },{
        id: 8,
        venueId: 2,
        bandId: 8,
        date: new Date(2023, month(), day())
    },{
        id: 9,
        venueId: 1,
        bandId: 9,
        date: new Date(2023, month(), day())
    },{
        id: 10,
        venueId: 2,
        bandId: 1,
        date: new Date(2023, month(), day())
    },{
        id: 11,
        venueId: 3,
        bandId: 2,
        date: new Date(2023, month(), day())
    },{
        id: 12,
        venueId: 4,
        bandId: 3,
        date: new Date(2023, month(), day())
    },{
        id: 13,
        venueId: 5,
        bandId: 4,
        date: new Date(2023, month(), day())
    },{
        id: 14,
        venueId: 6,
        bandId: 5,
        date: new Date(2023, month(), day())
    },{
        id: 15,
        venueId: 7,
        bandId: 6,
        date: new Date(2023, month(), day())
    },{
        id: 16,
        venueId: 8,
        bandId: 7,
        date: new Date(2023, month(), day())
    },{
        id: 17,
        venueId: 9,
        bandId: 8,
        date: new Date(2023, month(), day())
    },{
        id: 18,
        venueId: 8,
        bandId: 1,
        date: new Date(2023, month(), day())
    },{
        id: 19,
        venueId: 7,
        bandId: 2,
        date: new Date(2023, month(), day())
    },{
        id: 20,
        venueId: 6,
        bandId: 3,
        date: new Date(2023, month(), day())
    },]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}