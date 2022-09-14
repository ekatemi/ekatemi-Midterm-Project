/* Selecting the HTML form and adding a 'submit' event listener */
const form = document.getElementById("contact-us");
const url = form.action;

let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  // Prevent default behavior:
  e.preventDefault();

  /*   function validateForm() {
    if (phone.charAt(0) !== "+") {
      alert("Phone number should start from +!");
      return false;
    }
  }
  validateForm(); */

  const data = {
    name: fullName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  const body = { item: data };

  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
    },
    body: JSON.stringify(body),
  };

  fetch(url, fetchParams)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error("error");
    });
});
