$(document).ready(function () {
  // Function to get the search query from URL parameters
  function getSearchQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("q") || "";
  }

  // Function to display search results
  function displaySearchResults() {
    var searchQuery = getSearchQuery();
    document.getElementById("default-search").value = searchQuery;
    // Perform additional logic to fetch and display actual search results
  }

  // Initial display of search results
  displaySearchResults();

  // Function to create a card element
  function createCard(item) {
    var card = document.createElement("div");
    card.className = "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8";

    var truncatedDescription =
      item.description.length > 50
        ? item.description.substring(0, 50) + "..."
        : item.description;

    // Create a fixed-height wrapper for the card content
    var cardWrapper = document.createElement("div");
    cardWrapper.className = "h-full";

    cardWrapper.innerHTML = `
    <div class="max-w-md mx-auto bg-white dark:bg-gray-800 h-full shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-700">
    <div class="grid grid-rows-1">
        <div class="aspect-w-16 aspect-h-9 rounded-full overflow-hidden py-4">
            <img class="object-cover w-24 h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Emblem_of_Nepal.svg" alt="${item.name}">
        </div>
        <div class="px-6 py-4">
            <div class="font-semibold text-xl mb-2 text-center">${item.name}</div>
            <p class="text-gray-700 dark:text-gray-300 text-base text-center">${truncatedDescription}</p>
        </div>
        <div class="flex justify-center items-center pb-4">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full inline-block transition-colors duration-300">
                Visit
            </a>
        </div>
    </div>
</div>
    `;

    // Append the fixed-height wrapper to the card
    card.appendChild(cardWrapper);

    return card;
  }

  // Get the container where the cards will be appended
  var container = document.getElementById("cardContainer");

  var jsonUrl =
    "https://raw.githubusercontent.com/Know-Nepal/government-websites/main/data/websites.json";

  // Function to filter cards based on search query
  function filterCards(searchQuery, jsonData) {
    // Clear existing cards
    container.innerHTML = "";

    // Filter cards based on whether the search query matches with item.name
    var foundResults = false; // Variable to track if any results were found

    jsonData.items.forEach(function (item) {
      if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        var card = createCard(item);
        container.appendChild(card);
        foundResults = true; // Set to true if at least one result is found
      }
    });

    // If no results were found, display a message
    if (!foundResults) {
      var noResultsMessage = document.createElement("div");
      noResultsMessage.className =
        "text-center text-3xl text-gray-500 dark:text-gray-400 flex-1";
      noResultsMessage.textContent = "No results found for the provided query.";
      container.appendChild(noResultsMessage);
    }
  }

  // Fetch JSON data from the specified URL
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      // Initial rendering of all cards
      jsonData.items.forEach(function (item) {
        var card = createCard(item);
        container.appendChild(card);
      });

      // Get the search query from the URL
      var searchQuery = getSearchQuery();

      // Display search results based on the search query
      filterCards(searchQuery, jsonData);

      // Handle form submission event
      document
        .querySelector("form")
        .addEventListener("submit", function (event) {
          // Prevent the default form submission behavior
          event.preventDefault();

          // Get the search query from the input field
          var inputQuery = document
            .getElementById("default-search")
            .value.trim();

          // Update the URL with the new search query
          history.pushState({}, "", "?q=" + encodeURIComponent(inputQuery));

          // Filter and display cards based on the search query
          filterCards(inputQuery, jsonData);
        });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
