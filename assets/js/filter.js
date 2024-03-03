document.addEventListener("DOMContentLoaded", function () {
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
        <div class="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-center h-full">
            <img class="w-full h-56 object-contain object-center" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Emblem_of_Nepal.svg" alt="${item.name}">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">${item.name}</div>
                <p class="text-gray-700 dark:text-gray-300 text-base text-center">${truncatedDescription}</p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Visit
                </a>
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

  // Fetch JSON data from the specified URL
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      // Initial rendering of all cards
      jsonData.items.forEach(function (item) {
        var card = createCard(item);
        container.appendChild(card);
      });

      // Handle filter change event
      document.getElementById("filter").addEventListener("change", function () {
        // Clear existing cards
        container.innerHTML = "";

        // Filter cards based on whether the selected value is present in item.name
        var selectedValue = this.value;
        jsonData.items.forEach(function (item) {
          if (selectedValue === "all" || item.name.includes(selectedValue)) {
            var card = createCard(item);
            container.appendChild(card);
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
