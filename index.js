/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

const placeholer = document.querySelector("h4");

document.getElementById("get-activity").addEventListener("click", () =>
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((resp) => resp.json())
    .then((data) => {
      placeholer.textContent = data.activity;
    })
);
