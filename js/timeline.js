// Fade-in effect when scrolling with staggered animation
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".event");
    let windowHeight = window.innerHeight;

    elements.forEach((el, index) => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 200); // Adds delay for staggered effect
        }
    });
});

// "See More" button functionality
function showMoreEvents() {
    let hiddenEvents = document.getElementById("hidden-events");
    let seeMoreBtn = document.getElementById("see-more-btn");

    hiddenEvents.style.display = "block";
    seeMoreBtn.style.display = "none"; // Hide button after clicking
}
