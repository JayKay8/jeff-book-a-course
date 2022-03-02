function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("firstName", document.getElementById("firstName").value);
  const firstName = sessionStorage.getItem("firstName");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("lastName", document.getElementById("lastName").value);
  const lastName = sessionStorage.getItem("lastName");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("email", document.getElementById("email").value);
  const email = sessionStorage.getItem("email");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("street", document.getElementById("street").value);
  const street = sessionStorage.getItem("street");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("city", document.getElementById("city").value);
  const city = sessionStorage.getItem("city");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("zip", document.getElementById("zip").value);
  const city = sessionStorage.getItem("zip");
}

function alertFunction() {
  alert("The Form was submitted");
  sessionStorage.setItem("kurs", document.getElementById("kurs").value);
  const city = sessionStorage.getItem("kurs");
}

function doAllWork() {
  // validate form
  //validateForm();
  //validateFirstName();
  //validateLastName();

  // save data
  let firstName = document.getElementById("firstName").value;
  console.log("first name is:" + firstName);
  sessionStorage.setItem("firstName", firstName);

  let lastName = document.getElementById("lastName").value;
  console.log("last name is:" + lastName);
  sessionStorage.setItem("lastName", lastName);

  let email = document.getElementById("email").value;
  console.log("email is:" + email);
  sessionStorage.setItem("email", email);

  let street = document.getElementById("street").value;
  console.log("street is:" + street);
  sessionStorage.setItem("street", street);

  let city = document.getElementById("city").value;
  console.log("city is:" + city);
  sessionStorage.setItem("city", city);

  let zip = document.getElementById("zip").value;
  console.log("zip is:" + zip);
  sessionStorage.setItem("zip", zip);

  let kurs = document.getElementById("kurs").value;
  console.log("kurs is:" + kurs);
  sessionStorage.setItem("kurs", kurs);

  // finally
  window.location.assign("confirmation.html");
}

function validateFirstName() {
  let firstName = document.getElementById("firstName").value

  if (!firstName) {
    alert("please fill in your first name");
    return false;
  }
  else {
    return true;
  }
}

function validateLastName() {
  let firstName = document.getElementById("lastName").value

  if (!lastName) {
    alert("please fill in your last name");
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  let firstName = document.getElementById("email").value

  if (!email) {
    alert("please enter a valid email adress");
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  let firstName = document.getElementById("street").value

  if (!street) {
    alert("please fill in your street");
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  let firstName = document.getElementById("city").value

  if (!city) {
    alert("please fill in your city");
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  let zip = document.getElementById("zip").value

  if (!city) {
    alert("please fill in your zip");
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  let kurs = document.getElementById("kurs").value

  if (!kurs) {
    alert("please choose your course");
    return false;
  }
  else {
    return true;
  }
}


document.getElementById("formular").addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  doAllWork();
});

function cursor(x){
  let pointer = x.selectedIndex;
  document.body.style.cursor = x.options[pointer].text;
}