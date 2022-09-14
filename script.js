<<<<<<< HEAD
/* For the window object, the load event is fired when the whole webpage (HTML) has loaded fully, 
including all dependent resources, including JavaScript files, CSS files, and images.*/
window.addEventListener("load", function () {
=======
/* 
For the window object, the load event is fired when the whole webpage (HTML) has loaded fully, 
including all dependent resources, including JavaScript files, CSS files, and images.*/
window.addEventListener("load", function () {

>>>>>>> 4a73ee6ba847f1a36f76012115f2b3bf3f8118d9
  const submitButton = document.getElementById("submit-form-btn");
  if (submitButton) {
    submitButton.addEventListener("click", submitForm);
  }

  function submitForm() {
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (!phone.startsWith("+")) {
      document.getElementById("tel-error").innerHTML =
        "Number must start with +!";
    } else if (message.length < 50) {
      document.getElementById("message-error").innerHTML =
        "Minimum length is 50 characters";
    } else {
<<<<<<< HEAD
      const form = document.getElementById("contact-us");
      // Prevents form from submitting by default
=======
      
      const form = document.getElementById("contact-us");
// Prevents form from submitting by default
>>>>>>> 4a73ee6ba847f1a36f76012115f2b3bf3f8118d9
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      const url = form.action;

      const data = {
        name: fullName,
        email: email,
        phone: phone,
        message: message,
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
        //if all ok then
        .then((json) => {
          console.log(json);
          document.getElementById("message-error").innerHTML =
            "Thank you for contact us!";
<<<<<<< HEAD
          document.getElementById("fullname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
=======
          fullName = "";
          email = "";
          phone = "";
          message = "";
>>>>>>> 4a73ee6ba847f1a36f76012115f2b3bf3f8118d9
        })
        .catch((err) => console.log(err));
    }

<<<<<<< HEAD
    //end of function submitForm
  }

  //END window.addEventListener!!!!!
});
=======

//end of function submitForm 
} 

//END window.addEventListener!!!!!
});
>>>>>>> 4a73ee6ba847f1a36f76012115f2b3bf3f8118d9
