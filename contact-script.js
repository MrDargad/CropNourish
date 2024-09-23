function contactValidation() {
  var fname = document.enquiry.fname;
  var lname = document.enquiry.lname;
  var country = document.enquiry.country;
  var uemail = document.enquiry.email;
  var uphone = document.enquiry.phone;

  if (name_validation(fname, 1, 20)) {
    if (name_validation(lname, 1, 20)) {
      if (ValidateEmail(uemail)) {
        if (phone_validate(uphone, 10)) {
          return true;
        }
      }
    }
  }
  return false;
}
function name_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid >= my || uid < mx) {
    alert("Please enter your first name");
    uid.focus();
    return false;
  }
  var letters = /^[A-Za-z]+$/;
  if (uid.value.match(letters)) {
    return true;
  } else {
    alert("firstname must have alphabet characters only");
    uid.focus();
    return false;
  }
}

function phone_validate(uphone, x) {
    var phone_len = uphone.value.length;
    if (phone_len != x) {
      alert("Please enter correct Phone number");
      uphone.focus();
      return false;
    }
    var letters = /0-9/;
    if (uphone.value.match(letters)) {
      return true;
    } else {
      alert("firstname must have alphabet characters only");
      uphone.focus();
      return false;
    }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}