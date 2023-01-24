
function setError(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
}

function clearErrors() {
  errors = document.getElementsByClassName('formError');
  for (let items of errors) {
    items.innerHTML = "";
  }
}

function validateForm() {
  clearErrors();
  // get refrence of all input fields --
  var name = document.forms["myForm"]["fname"].value;
  var email = document.forms["myForm"]["femail"].value;
  var mobile = document.forms["myForm"]["fmobile"].value;
  var password = document.forms["myForm"]["fpassword"].value;
  var cpassword = document.forms["myForm"]["cpassword"].value;


  var nameError = emailError = mobileError = passError = cpassError = true


  // set validation for name input field ---
  if (name.length < 1) {
    setError("name", "*name can not blank !");

  } else {
    nameError = false;
  }

  // set validation for email input field ---
  if (email.length == 0) {
    setError("email", "*email can not be blank !");

  } else {
    emailError = false;
  }

  // set validation for mobile--

  if (mobile == "") {
    setError("mobile", "* mobile number can not blank !");

  } else if (mobile.length != 10) {
    setError("mobile", "please enter valid mob. number !");

  } else {
    mobileError = false;
  }
  // set validation for password--

  var password_str = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/ //7 to 15 characters which contain at least one numeric digit and a special character

  if (password.length == "") {
    setError("password", "*password can not blank!");

  } else if (password_str.test(password) === false) {
    setError("password", "a numeric digit,a special character,length b/w(7-15)!");

  } else {
    passError = false;
  }

  // set validation for confirm-password--
  if (cpassword.length == "") {
    setError("cpassword", "*confirm-password can not be blank !");

  } else if (cpassword !== password) {
    setError("cpassword", "*confirm password is incorrect !");

  }
  else {
    cpassError = false;
  }

  if ((nameError || emailError || mobileError || passError || cpassError) == true) {
    return false;
  }


  // // data set to local storage--
  let data = new Array();
  data = JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  if (data.some((v) => { return v.email == email })) {
    alert('user is Already registered !');
  } else {
    data.push({
      "name": name,
      "email": email,
      "password": password,
    });
    localStorage.setItem('data', JSON.stringify(data));
    setTimeout(() => {
      window.location.href='login.html'
    }, 0);
  }

  // // data set to session storage--

  let user_data = new Array();
  user_data = JSON.parse(sessionStorage.getItem("user_data"))
    ? JSON.parse(sessionStorage.getItem("user_data"))
    : [];
  if (user_data.some((user_data) => { return user_data.email == email })) {
    alert('user is Already registered !');
  } else {
    user_data.push({
      "name": name,
      "email": email,
      "password": password,
    });
    sessionStorage.setItem('user_data ', JSON.stringify(user_data));
  }

  // data set to cookies --
  
  // let cookieObj = {};
  // cookieObj.name = name;
  // cookieObj.password = password;
  // cookieObj.email = email;

  // let cookies = JSON.stringify(cookieObj);
  // document.cookie = `userName=${cookies}`;

  // setTimeout(() => {
  //   window.location.href = 'login.html'
  // }, 0);
}


















