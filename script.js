// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
//1-prevent a request from being sent out and the page reloading:
        event.preventDefault();
        let document = window.document;
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems"); 
        list.style.visibility = "hidden";
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

   let listedPlanets;
   let listedPlanetsResponse;
//Set listedPlanetsResponse equal to the value/promise returned by myFetch()--the list of planets.
   listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
//Call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image);
   });
});
