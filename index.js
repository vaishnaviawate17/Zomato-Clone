import { city } from "./city.js";

let localitiescontainerEl = document.querySelector(".localities-container")
let htmllocalitieslist = city.map((El) => {
    return `
   <div class="localities-list">
        <div class="localities-card">
            <h3>${El.name}</h3>
        <p>${El.place ? El.place + "places" :"" }</p> 
        </div>
        <i class="fa-solid fa-angle-right"></i>
    </div>
   `
}).join("")
localitiescontainerEl.innerHTML= htmllocalitieslist

