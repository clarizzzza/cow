document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".clickable-image");
    const overlay = document.getElementById("overlay");
    const enlargedImage = document.getElementById("enlarged-image");

    // Add click event listener to each image
    images.forEach(image => {
        image.addEventListener("click", () => {
            enlargedImage.src = image.src; // Set the clicked image's source
            overlay.classList.remove("hidden"); // Show the overlay
        });
    });

    // Add click event listener to overlay to close the enlarged image
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden"); // Hide the overlay
    });
});

