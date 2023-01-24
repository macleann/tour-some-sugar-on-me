What's included:
    Modules:
        scripts:
            database.js
                objective: to store all needed data as objects within subarrays and export it for use in the corresponding module
                functions: getVenues(), getBands(), and getBookings()
                    purpose: all three will return a map of objects that can be used when the function is invoked in other modules
            Venues.js
                objective: to import any needed data, define a function that iterates through said data to generate HTML, and export the function. also, to create responsive web design with
                    event listeners.
                functions: Venues(), calling addEventListener()
                    purpose: to declare an html variable that begins an HTML unordered list, iterate through the venues map to create individual HTML list items,
                        ends the HTML unordered list, and then returns the html variable
                    purpose: any venue clicked on will display all bands booked at that venue
            Bands.js
                objective: the same as Venues.js but for this module
                functions: Bands(), calling addEventListener()
                    purpose: the same as Venues() in Venues.js but for Bands()
                    purpose: any band clicked on will display all venues the band is booked for
            Bookings.js
                objective: the same as Venues.js and Bands.js but for this module
                functions: Bookings(), calling addEventListener()
                    purpose: to declare an html variable that begins an HTML unordered list, iterate through the bookings map - while referencing the corresponding band and venue objects -
                        to create individual HTML list items, ends the HTML unordered list, and then returns the html variable
                    purpose: any booking clicked on will display all band information
            main.js
                objective: to import and invoke the other modules' html code within the containing html code. the order and encapsulating html code in which the functions
                    are invoked define the layout of the site
        styles:
            details.css:
		objective: to style the body of the html in order to enhance the user experience
            main.css:
                objective: to house the imports (details.css and a google font) as well as to style h1-6 heading tags and event listening windows
        index.html:
            objective: to contain the appropriate tags to implement the main.js module and css styling

    Algorithms:
        database.js:
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
        Venues.js:
            import getVenues, getBookings, and getBands from database.js
            declare venues = getVenues()
            declare bookings = getBookings()
            declare bands = getBands()
            call document.addEventListener()
                arguments of "click" and a defined anonymous function with the parameter of (clickEvent):
                    define a variable itemClicked to store the target method of clickEvent
                    if statement that checks for an id beginning with "venue"
                        declare a destructured variable [,venueId] that splits the id, such as "venue--1", by the delimiter "--"
                        declare a variable matchingVenue and set it to null
                        for of loop to iterate through venues objects
                            if statement that checks if venueId (using parseInt function) === venue.id
                                set matchingVenue = venue object
                        declare a variable matchingBookings and set it to an empty array
                        for of loop to iterate through bookings objects
                            if statement that checks if matchingVenue.id === bookings.venueId
                                push bandId to matchingBookings
                        declare a variable matchingBands and set it to an empty array
                        define a function makeWindowAlert that does not take any parameters
                            declare a variable windowAlert and set it to an empty string
                            if statement that checks if matchingBookings' array length > 1
                                for of loop to iterate through bands
                                    for i loop to iterate through each id in matchingBooking
                                        if statement that checks if matchingBookings[i] === band.id
                                            push band.name to matchingBands
                                set windowAlert = makeBandsString() + " are playing this venue" (hoisted function declared below)
                            else
                                for of loop to iterate through bands
                                    if statement to check matchingBookings[0] === band.id
                                        set windowAlert = `${band.name} is playing this venue`
                            return windowAlert
                        declare a function makeBandsString (make sure it's function declaration and not an arrow function), no parameters needed
                            declare a variable multipleBandsString and set it to an empty string
                            if statement to check if matchingBookings array length < 3
                                set multipleBandsString = `${matchingBands[0]} and ${matchingBands[1]}`
                            else
                                for i loop to iterate through matchingBands length - 1
                                    append multipleBandsString += `${matchingBands[i]}, `
                                declare a variable lastBand and set it to matchingBands length -1
                                append multipleBandsString += `and ${matchingBands[lastBand]}
                            return multipleBandsString
                        use window.Alert method that invokes and prints the previously defined makeWindowAlert function
                    define and export Venues function, no parameters needed
                        declare html variable and set it to "<ul>"
                        for of loop to iterate through venues
                            append html += `<li id=venue--${venue.id}>${venue.name}</li>
                        append html += </ul>
                        return html

        Bands.js:
            import getBands, getBookings, and getVenues from database.js
            declare bands = getBands()
            declare bookings = getBookings()
            declare venues = getVenues()
            call document.addEventListener()
                arguments of "click" and an anonymous function with the parameter of (clickEvent):
                    define a variable itemClicked to store the target method of clickEvent
                    if statement that checks for an id beginning with "band"
                        declare a destructured variable [,bandId] that splits the id, such as "band--1", by the delimiter "--"
                        declare a variable matchingBand and set it to null
                        for of loop to iterate through bands objects
                            if statement that checks if bandId (using parseInt function) === band.id
                                set matchingBand = band object
                        declare a variable matchingBookings and set it to an empty array
                        for of loop to iterate through bookings objects
                            if statement that checks if matchingBand.id === bookings.bandId
                                push venueId to matchingBookings
                        declare a variable matchingVenues and set it to an empty array
                        define a function makeWindowAlert that does not take any parameters
                            declare a variable windowAlert and set it to an empty string
                            if statement that checks if matchingBookings' array length > 1
                                for of loop to iterate through venues
                                    for i loop to iterate through each id in matchingBooking
                                        if statement that checks if matchingBookings[i] === venue.id
                                            push venue.name to matchingVenues
				set windowAlert = `${matchingBand.name} are playing at ` + makeVenuesString() (hoisted function declared below)
                            else
                                for of loop to iterate through venues
                                    if statement to check matchingBookings[0] === venue.id
                                        set windowAlert = `${matchingBand.name} is playing at ${venue.name}`
                            return windowAlert
                        declare a function makeVenuesString (make sure it's function declaration and not an arrow function), no parameters needed
                            declare a variable multipleVenuesString and set it to an empty string
                            if statement to check if matchingBookings array length < 3
                                set multipleVenuesString = `${matchingVenues[0]} and ${matchingVenues[1]}`
                            else
                                for i loop to iterate through matchingVenues length - 1
                                    append multipleVenuesString += `${matchingVenues[i]}, `
                                declare a variable lastVenue and set it to matchingVenues length -1
                                append multiplevenuesString += `and ${matchingVenues[lastVenue]}
                            return multipleVenuesString
                        use window.Alert method that invokes and prints the previously defined makeWindowAlert function
                    define and export Bands function, no parameters needed
                        declare html variable and set it to "<ul>"
                        for of loop to iterate through bands
                            append html += `<li id=band--${band.id}>${band.name}</li>
                        append html += </ul>
                        return html

        Bookings.js:
            import getBookings, getBands, getVenues from database.js
            declare bookings = getBookings()
            declare bands = getBands()
            declare venues = getVenues()
            call document.addEventListener()
                arguments of "click" and an anonymous function with a (clickEvent) parameter:
                    declare variable itemClicked to store the clickEvent parameter's .target method
                    if statement to check if itemClicked's id property starts with "booking", such as "booking--1"
                        declare a destructured variable [,bookingId] set to itemClicked's id property split by the delimiter "--"
                        declare variable matchingBooking and set it to null
                        for of loop to iterate through bookings
                            if statement to check if booking.id === bookingId using the parseInt function
                                set matchingBooking = booking
                        for of loop to iterate through bands
                            if statement to check if matchingBooking.bandId === band.id
                                if statement to check if band.numOfMembers > 1
                                    use window.Alert method to print `${band.name}
                                        ${band.genre}
                                        Formed in ${band.yearFormed}
                                        ${numOfMembers} band members`
                                else
                                    use window.Alert method to print `${band.name}
                                        ${band.genre}
                                        Formed in ${band.yearFormed}
                                        Solo act`
            define and export Bookings function, no parameters needed
                declare html variable set to string "<ul>"
                for of loop to iterate through bookings
                    for of loop to iterate through bands
                        if statement that checks booking.bandId === band.id
                            append html += `<li id="booking--${booking.id}">${band.name} is playing at `
                    for of loop to iterate through venues
                        if statement that checks booking.venueId === venue.id
                            append html += `${venue.name} on ${booking.date}</li>`
                append html += "</ul>"
                return html
                
        main.js
            import Venues from Venues.js
            import Bands from Bands.js
            import Bookings from Bookings.js
            declare a variable mainContainer that stores and invokes document.querySelector method with the argument of the id "#container"
            declare a variable applicationHTML that stores the following html code as a string:
                <h1>Tour Some Sugar On Me</h1>
                <article class="bookings">
                    <h2>Bookings</h2>
                    ${Bookings}
                </article>
                <article class="details">
                    <section class="details--column list details--venues">
                        <h2>Venues</h2>
                        ${Venues}
                    </section>
                    <section class="details--column list details--bands">
                        <h2>Bands</h2>
                        ${Bands}
                    </section>
                </article>
            set mainContainer's innerHTML property to applicationHTML
		
        
        index.html
            declare the document type of html
            declare the language as english
            in the header
                declare charset
                give the page the title Tour Some Sugar On Me
                import the styles module containing our css
            in the body
                main tag with id of container
                script tag that injects main.js module
        
        styles
            details.css
                define the styling for the following classes
                    bookings
                    details--column
                    list
                    details--venues
                    details--bands
            main.css
                import details.css stylesheet
                import google font
                style typography