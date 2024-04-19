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
