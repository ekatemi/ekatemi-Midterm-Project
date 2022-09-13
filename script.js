/* Selecting the HTML form and adding a 'submit' event listener */

const form = document.getElementById("contact-us");
console.log(form);
form.addEventListener("submit", function (e) {
  // Prevent default behavior:
  e.preventDefault();
  // Create new FormData object:
if....

const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
const data = {
    name: document.getElementById("fullname").value,
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
