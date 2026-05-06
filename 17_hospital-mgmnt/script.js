let patientList = [];

document.addEventListener("DOMContentLoaded", function () {

    //  Load data from localStorage
    let storedData = localStorage.getItem("patients");

    if (storedData) {
        patientList = JSON.parse(storedData);
        displayPatients();
    }

    // Form submit
    document.getElementById("patientForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let age = document.getElementById("age").value.trim();
        let gender = document.getElementById("gender").value;
        let mobile = document.getElementById("mobile").value.trim();
        let disease = document.getElementById("disease").value.trim();

        let mobileError = document.getElementById("mobileError");

        let mobilePattern = /^[0-9]{10}$/;

        if (!mobilePattern.test(mobile)) {
            mobileError.innerText = "Enter valid 10-digit mobile number";
            return;
        } else {
            mobileError.innerText = "";
        }

        let patient = { name, age, gender, mobile, disease };

        // Add to array
        patientList.push(patient);

        // Save to localStorage
        localStorage.setItem("patients", JSON.stringify(patientList));

        // Update UI
        displayPatients();

        // Reset form
        document.getElementById("patientForm").reset();
    });

});


//  Display function
function displayPatients() {
    let table = document.getElementById("patientTable");
    table.innerHTML = "";

    patientList.forEach(p => {
        let row = table.insertRow();

        row.insertCell(0).innerText = p.name;
        row.insertCell(1).innerText = p.age;
        row.insertCell(2).innerText = p.gender;
        row.insertCell(3).innerText = p.mobile;
        row.insertCell(4).innerText = p.disease;
    });

    // Update count
    document.getElementById("count").innerText = patientList.length;
}


//  Clear button function (FIXED)
function clearData() {
    localStorage.removeItem("patients"); // ONLY clears when clicked

    patientList = [];
    displayPatients();

    alert("All patient data cleared!");
}
