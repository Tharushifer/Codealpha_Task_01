function calculateAge() {
    var dob = document.getElementById("dob").value;
    var mob = document.getElementById("mob").value;
    var yob = document.getElementById("yob").value;

    if (dob === "" || mob === "" || yob === "") {
        alert("Please fill in all fields.");
        return;
    }

    var birthDate = new Date(yob, mob - 1, dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is: " + age;
}
