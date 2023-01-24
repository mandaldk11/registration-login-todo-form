
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

function saveLoginData() {
  clearErrors();
  // get refrence of all input fields --

  var email = document.forms["myForm"]["femail"].value;
  var password = document.forms["myForm"]["fpassword"].value;


  var emailError = passError = true


  // set validation for email input field ---
  if (email.length == 0) {
    setError("email", "*email can not be blank !");

  } else {
    emailError = false;
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



  if ((emailError || passError) == true) {
    return false;
  }


  // // data set to local storage--
  let data = new Array();
  data = JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  if (data.some((v) => { return v.email == email && v.password == password })) {
    alert('log in successfully...!');
    setTimeout(() => {
      window.location.href = 'todos.html'
    }, 0);
  } else {
    alert('login failed...!');
    setTimeout(() => {
      window.location.href = 'login.html'
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


















