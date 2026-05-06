$(document).on("pagecreate", "#feedbackPage", function () {

    $("#feedbackForm").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();
        let recommend = $("#recommend").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields!");
            return;
        }

        let output = `
Name: ${name}
Email: ${email}
Feedback: ${message}
Recommend: ${recommend}
        `;

        alert("Feedback Submitted Successfully!\n\n" + output);

        $("#feedbackForm")[0].reset();
    });

});