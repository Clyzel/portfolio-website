function giveMeYourInfo() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var what = document.forms["RegForm"]["Subject"];
    

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }


    if (what.selectedIndex < 1) {
        alert("Please rate ya girl's website.");
        what.focus();
        return false;
    }

    return true;
}