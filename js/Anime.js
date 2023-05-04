// Select all elements with the class "slider"
const sliders = document.querySelectorAll(".slider");

// For each slider element...
sliders.forEach(slider => {
  // Find the container, prevButton, nextButton, products, and the number of products
  const container = slider.querySelector(".slider-container");
  const prevButton = slider.querySelector(".slider-button-prev");
  const nextButton = slider.querySelector(".slider-button-next");
  const products = container.querySelectorAll(".product");
  const numProducts = products.length;
  let slideIndex = 0;

  // Function to show the current slides
  function showSlides() {
    // Hide all products
    for (let i = 0; i < numProducts; i++) {
      products[i].style.display = "none";
    }

    // Show the 6 products starting from the slide index
    for (let i = slideIndex; i < slideIndex + 6 && i < numProducts; i++) {
      products[i].style.display = "block";
    }
  }

  // Show the initial slides
  showSlides();

  // Add event listener for prevButton click
  prevButton.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    showSlides();
  });

  // Add event listener for nextButton click
  nextButton.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > numProducts - 6) {
      slideIndex = numProducts - 6;
    }
    showSlides();
  });
});


// Trigger the function when the window is loaded
window.onload = function() {
  const products = document.querySelectorAll('.product');
  const preview = document.querySelector('.preview');
  const overlay = document.querySelector('.overlay');

  // Loop through all products and add a click event listener to each one
  products.forEach(product => {
    product.addEventListener('click', () => {
      const target = product.dataset.name;
      preview.setAttribute('data-target', target);
      preview.style.display = 'block';
      /* Show the overlay when the popup is displayed */
      overlay.style.display = 'block'; 
    });
  });
  
  // Add a click event listener to the close icon inside the preview element
  preview.querySelector('.fa-times').addEventListener('click', () => {
    // Hide the preview element
    preview.style.display = 'none';
    /* Hide the overlay when the popup is closed */
    overlay.style.display = 'none'; 
  });
}


function updateButtonText() {
  const searchText = document.getElementById("SearchBox").value;
  const searchResult = document.getElementById("searchResultText");
  const heading = document.getElementById("searchHeading");

  // Update the search result text to show the number of search results and the search query
  searchResult.innerHTML = `Showing 69 results for "${searchText}"`;
  heading.textContent = `"${searchText}"`;
}