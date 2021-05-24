const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let button1 = document.querySelector("button");

  button1.addEventListener("click", e => {
    return fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => addData(json));
  })
});

function addData(json) {
  document.querySelector("div.container").innerHTML = 
  `<div class="row align-items-start">

    <div class="col">

      <img src=${json.results[0].picture.medium} alt="" id="profile_picture"/>

    </div>

    <div class="col">

      <label for="fullname"> <!-- Include first name, last name AND title -->
        Name: ${json.results[0].name.title} ${json.results[0].name.first} ${json.results[0].name.last}
      </label>
      <h3 id="fullname"></h3>

    </div>

    <div class="col">

      <label for="email">
        Email: ${json.results[0].email}
      </label>
      <h4 id="email"></h4>

    </div>
  </div>

  <div class="row align-items-center">
    <div class="col">

      <label for="street">Street: ${json.results[0].location.street.number} ${json.results[0].location.street.name}</label>
      <h4 id="street"></h4>

      <label for="city">City: ${json.results[0].location.city}</label>
      <h4 id="city"></h4>

      <label for="state">State: ${json.results[0].location.state}</label>
      <h4 id="state"></h4>

      <label for="postcode">Post Code: ${json.results[0].location.postcode}</label>
      <h4 id="postcode"></h4>

    </div>

    <div class="col">

      <label for="phone">Phone: ${json.results[0].phone}</label>
      <h4 id="phone"></h4>

      <label for="cell">Cell: ${json.results[0].cell}</label>
      <h4 id="cell"></h4>

    </div>

    <div class="col">

      <label for="date_of_birth">Date of Birth: ${json.results[0].dob.date}</label>
      <h4 id="date_of_birth"></h4>

    </div>

  </div>

  <div class="row align-items-end">
    <div class="col">
    </div>
    <div class="col">
      <button type="button" class="btn btn-primary">Press me to add a new person!</button>
    </div>
    <div class="col">
    </div>
  </div>`;
}

