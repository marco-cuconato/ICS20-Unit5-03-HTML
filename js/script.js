/* Created by: marco cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

"use strict"

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-01-HTML/sw.js", {
    scope: "/ICS2O-UNIT5-0-HTML/",
  })
}

/** 
* This function displays an xxx
*/
function buttonClicked() {

   var over17 = document.getElementById("over17")
   var over15 = document.getElementById("over13")
   var over5 = document.getElementById("over5")

   if (over17.checked >= true) {
    document.getElementById("age").innerHTML =
    "You can watch R rated movies."

  } else if (over13.checked >= true) {
    document.getElementById("age").innerHTML =
  "You can watch PG rated movies."

  } else if (over5.checked >= true) {
    document.getElementById("age").innerHTML =
  "You can watch G rated movies."

  } else {
    document.getElementById("age").innerHTML =
  "You can't watch any movies."
  }
}
  