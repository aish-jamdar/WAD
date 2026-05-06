$(document).on("pagecreate", "#home", function () {

    const deptData = {
        it: {
            title: "IT Department",
            info: "Information Technology focuses on software, networking, and data systems."
        },
        comp: {
            title: "Computer Engineering",
            info: "Computer Engineering deals with programming, algorithms, and system design."
        },
        etc: {
            title: "ETC Department",
            info: "Electronics and Telecommunication focuses on communication systems and circuits."
        },
        mech: {
            title: "Mechanical Engineering",
            info: "Mechanical Engineering deals with machines, thermodynamics, and manufacturing."
        },
        elect: {
            title: "Electrical Engineering",
            info: "Electrical Engineering focuses on power systems and control systems."
        }
    };

    $(".dept-btn").click(function () {
        let dept = $(this).data("dept");

        $("#deptTitle").text(deptData[dept].title);
        $("#deptInfo").text(deptData[dept].info);

        $.mobile.changePage("#infoPage");
    });

});