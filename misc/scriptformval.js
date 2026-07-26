function myfunc() {
    var a = document.getElementById("user_name").value;
    var correct_way = /^[A-Za-z]+$/;
    if (a == "") {
        document.getElementById("message1").innerHTML = "**Enter Valid Userame";
        return false;
    }
    if (a.match(correct_way)) {
        true;
    }
    else {
        document.getElementById("message1").innerHTML = "**Username should be all alphabets";
        return false;
    }
    if (a.length < 3) {
        document.getElementById("message1").innerHTML = "**Please enter userame longer than 3 letters";
        return false;
    }
    if (a.length > 20) {
        document.getElementById("message1").innerHTML = "**Please enter userame shorter than 20 letters";
        return false;
    }

    var b = document.getElementById("pass1").value;
    var c = document.getElementById("pass2").value;
    if (b == "") {
        document.getElementById("pass1").innerHTML = "**Enter Valid Password";
        return false;
    }
    if (b.length < 5) {
        document.getElementById("pass1").innerHTML = "**Please enter password longer than 5";
        return false;
    }
    if (a.length > 25) {
        document.getElementById("pass1").innerHTML = "**Please enter password shorter than 25";
        return false;
    }
    if (a != b) {
        document.getElementById("pass1").innerHTML = "**Invalid Password";
        return false;


