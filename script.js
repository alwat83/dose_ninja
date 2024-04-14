document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the medication name entered by the user
    const medicationName = document.getElementById("medicationName").value;

    // Check if the medication name is not empty
    if (medicationName.trim() !== "") {
        // Define the FDA API endpoint and API key
        const apiEndpoint = "https://api.fda.gov/drug/label.json";
        const apiKey = "o2vfpMQbZYGsZfjgtboSaVtbyCAS1QLVdwxcOeLd"; // Replace with your actual API key

        // Build the API URL with the medication name and API key
        const apiUrl = `${apiEndpoint}?search=openfda.generic_name:${medicationName}&api_key=${apiKey}`;

        // Make an API request using fetch
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Process and display the search results
                displaySearchResults(data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    } else {
        alert("Please enter a medication name.");
    }
});

function displaySearchResults(results) {
    // Display the search results in the searchResults div
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";

    if (results.length > 0) {
        // Iterate through the results and display relevant information
        results.forEach((result) => {
            const medicationName = result.openfda.generic_name || ["N/A"];
            const dosage = result.dosage_and_administration || ["N/A"];

            const resultDiv = document.createElement("div");
            resultDiv.innerHTML = `<p><strong>Medication Name:</strong> ${medicationName.join(", ")}</p>
                                    <p><strong>Dosage:</strong> ${dosage.join(", ")}</p>`;

            searchResultsDiv.appendChild(resultDiv);
        });
    } else {
        searchResultsDiv.innerHTML = "<p>No results found.</p>";
    }
}
