/* ==================================
   NAVBAR SHADOW
================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});



/* ==================================
   MOBILE MENU
================================== */

const menuToggle =
    document.getElementById("menuToggle");


const navLinks =
    document.querySelector(".nav-links");


menuToggle.addEventListener(
    "click",
    function () {

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

    }
);



/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menuToggle.classList.remove("active");

                navLinks.classList.remove("active");

            }
        );

    });



/* ==================================
   SCROLL REVEAL
================================== */

const revealElements =
    document.querySelectorAll(

        ".project-card, " +
        ".skill-box, " +
        ".timeline-item, " +
        ".education-card"

    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function (element) {

        element.classList.add("hidden");

        revealObserver.observe(element);

    }
);



/* ==================================
   ACTIVE NAVIGATION
================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const currentID =
                            entry.target.id;


                        navigationLinks.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active-link"
                                );


                                if (
                                    link.getAttribute("href")
                                    ===
                                    "#" + currentID
                                ) {

                                    link.classList.add(
                                        "active-link"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {

            rootMargin:
                "-40% 0px -50% 0px"

        }

    );


sections.forEach(
    function (section) {

        sectionObserver.observe(section);

    }
);



/* ==================================
   PROJECT INFORMATION
================================== */

const projectData = {

    power: {

        title:
            "Electrical Power Distribution",

        description:
            "A technical overview of mission-critical electrical power distribution, from utility incoming supply through medium-voltage switchgear, transformers, UPS systems and downstream electrical loads.",

        details: [

            {
                label: "SYSTEM",
                value: "Electrical Distribution"
            },

            {
                label: "VOLTAGE",
                value: "MV / LV"
            },

            {
                label: "FOCUS",
                value: "Reliability & Continuity"
            },

            {
                label: "APPLICATION",
                value: "Data Center"
            }

        ],

        tags: [
            "33kV",
            "RMU",
            "MVSG",
            "Transformer",
            "UPS",
            "Protection"
        ]

    },


    cooling: {

        title:
            "Data Center Cooling",

        description:
            "Understanding and supporting cooling infrastructure used to maintain stable environmental conditions for mission-critical data center equipment.",

        details: [

            {
                label: "SYSTEM",
                value: "Cooling Infrastructure"
            },

            {
                label: "MEDIUM",
                value: "Chilled Water"
            },

            {
                label: "FOCUS",
                value: "Thermal Management"
            },

            {
                label: "APPLICATION",
                value: "Data Hall"
            }

        ],

        tags: [
            "Chiller",
            "CRAH",
            "Fan Wall",
            "CHWS",
            "CHWR",
            "HVAC"
        ]

    },


    olct: {

        title:
            "Open Loop Cooling Tower",

        description:
            "Study of open-loop cooling tower systems involving condenser water circulation, heat rejection, makeup water, balancing pipework and water treatment.",

        details: [

            {
                label: "SYSTEM",
                value: "Heat Rejection"
            },

            {
                label: "WATER LOOP",
                value: "Condenser Water"
            },

            {
                label: "FOCUS",
                value: "Cooling Efficiency"
            },

            {
                label: "APPLICATION",
                value: "Chiller Plant"
            }

        ],

        tags: [
            "OLCT",
            "CWS",
            "CWR",
            "Makeup Water",
            "Water Treatment",
            "Cooling Tower"
        ]

    }

};



/* ==================================
   PROJECT MODAL
================================== */

const projectModal =
    document.getElementById(
        "projectModal"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalDetails =
    document.getElementById(
        "modalDetails"
    );


const modalTags =
    document.getElementById(
        "modalTags"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalOverlay =
    document.querySelector(
        ".modal-overlay"
    );



/* Open project */

document
    .querySelectorAll(".project-open")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const projectName =
                    button.dataset.project;


                const project =
                    projectData[
                        projectName
                    ];


                if (!project) {
                    return;
                }


                modalTitle.textContent =
                    project.title;


                modalDescription.textContent =
                    project.description;



                /* Build project detail boxes */

                modalDetails.innerHTML =
                    "";


                project.details.forEach(
                    function (detail) {

                        const detailBox =
                            document.createElement(
                                "div"
                            );


                        detailBox.className =
                            "modal-detail";


                        detailBox.innerHTML =

                            "<span>" +
                            detail.label +
                            "</span>" +

                            "<strong>" +
                            detail.value +
                            "</strong>";


                        modalDetails.appendChild(
                            detailBox
                        );

                    }
                );



                /* Build project tags */

                modalTags.innerHTML =
                    "";


                project.tags.forEach(
                    function (tag) {

                        const tagElement =
                            document.createElement(
                                "span"
                            );


                        tagElement.textContent =
                            tag;


                        modalTags.appendChild(
                            tagElement
                        );

                    }
                );



                /* Show modal */

                projectModal
                    .classList
                    .add("active");


                projectModal
                    .setAttribute(
                        "aria-hidden",
                        "false"
                    );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



/* ==================================
   CLOSE MODAL
================================== */

function closeProjectModal() {

    projectModal
        .classList
        .remove("active");


    projectModal
        .setAttribute(
            "aria-hidden",
            "true"
        );


    document.body.style.overflow =
        "";

}



modalClose.addEventListener(
    "click",
    closeProjectModal
);


modalOverlay.addEventListener(
    "click",
    closeProjectModal
);



/* ESC key closes popup */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProjectModal();

        }

    }
);