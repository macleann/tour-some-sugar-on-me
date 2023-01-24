/*
objective:
    to import and invoke the other modules' html code within the containing html code
    the order and encapsulating code in which the functions are invoked will define the layout of the site
*/

import { Bookings } from "./Bookings.js"
import { Venues } from "./Venues.js"
import { Bands } from "./Bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Tour Some Sugar On Me</h1>
    <article class="bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </article>

    <article class="details">
        <section class="detail--column list detail__venues">
            <h2>Venues</h2>
            ${Venues()}
        </section>
        <section class="detail--column list detail__bands">
            <h2>Bands</h2>
            ${Bands()}
        </section>
    </article>`

mainContainer.innerHTML = applicationHTML