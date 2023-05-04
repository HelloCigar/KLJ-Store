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
