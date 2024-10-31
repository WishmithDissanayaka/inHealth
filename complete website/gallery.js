document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the Read More button
    var readMoreButton = document.querySelector(".btn");
    
    // Get reference to the gallery section
    var gallerySection = document.querySelector(".container");
    
    // Add click event listener to the Read More button
    readMoreButton.addEventListener("click", function() {
        // Scroll to the gallery section smoothly
        gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-caption");
    const expandedContainer = document.getElementById("expandedContainer");
    const expandedImage = document.getElementById("expandedImage");
    const expandedHeading = document.getElementById("expandedHeading");
    const expandedCaption = document.getElementById("expandedCaption");
    const backButton = document.getElementById("backButton");
  
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        const src = this.getAttribute("src");
        const heading = this.getAttribute("data-heading");
        const caption = this.nextElementSibling.textContent;
  
        expandedImage.setAttribute("src", src);
        expandedHeading.textContent = heading;
        expandedCaption.textContent = caption;
  
        expandedContainer.style.display = "flex";
      });
    });
  
    expandedContainer.addEventListener("click", function (event) {
      // Check if the click occurred inside the expanded container or image
      if (event.target === expandedContainer || event.target === expandedImage) {
        expandedContainer.style.display = "none";
      }
    });
  
    backButton.addEventListener("click", function () {
      expandedContainer.style.display = "none";
    });
  });

