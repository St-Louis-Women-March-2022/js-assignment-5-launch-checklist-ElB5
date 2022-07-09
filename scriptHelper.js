// Write your helper functions here!
//remove require statement:
// require('isomorphic-fetch');

//5-Update the mission destination with vital facts and figures about where the shuttle is headed:
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
};

// Form validation: validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate:
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    }
};

//use validateInput() to complete the formSubmission() function. 
//formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. 
//Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements. 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form");
//2a-Validate the user-submitted data to ensure user entered something for every field:    
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || 
        validateInput(cargoLevel.value) === "Empty" ) {
        alert("All fields are required!");
//2b-Validate the user-submitted data to ensure user entered text for names and numbers for fuel and cargo levels:
    } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || 
        validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number" ) {
        alert("Enter valid information in all fields!");
//4-With validation, update a list of what is currently ready or not ready for the shuttle launch:        
    } else if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
        list.style.visibility = "visible"; 
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot.value} Ready`;
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "#00FF00";
    } else {
        list.style.visibility = "visible"; 
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot.value} Ready`;
        if (fuelLevel.value < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "#FF0000";
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
        }
        if (cargoLevel.value > 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "#FF0000";
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        }
    };
};
        
//myFetch() function pulls the planets list from JSON - I added the URL and return response.json():
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
};

//pickPlanet() takes in the list of planets. 
//Using Math.random(), return one planet from the list with a randomly-selected index:
function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * 6);
    return planets[randomPlanet];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
