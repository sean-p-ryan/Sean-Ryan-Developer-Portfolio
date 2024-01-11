// script.js

document.addEventListener("DOMContentLoaded", function() {
  // This event listener ensures that the code runs after the DOM has been fully loaded.

  const contentDiv = document.getElementById("content");

  // API endpoint URL
  const apiUrl = "https://api.example.com/data"; // Replace with your actual API URL

  // Fetch data from the API
  fetch(apiUrl)
      .then(response => response.json()) // Assuming the response is in JSON format
      .then(data => {
          // Process the fetched data and update the content on your page
          contentDiv.textContent = data.someProperty; // Update this line according to your data structure
      })
      .catch(error => {
          console.error("Error fetching data:", error);
          contentDiv.textContent = "An error occurred while fetching data.";
      });
});

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'msr57pzl9iiu',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '1LW-wfTasOGeqKSvPc2dtM1spz-1fs9KU0k1LfsynEU'
})

client.getEntry('4YYCNcxk6JevJ058Ea1MRX')
  .then((entry) => console.log(entry))
  .catch(console.error)
