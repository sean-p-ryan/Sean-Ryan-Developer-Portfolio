// src/script.js
import axios from 'axios';

document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    const apiUrl = "https://api.example.com/data";

    axios.get(apiUrl)
        .then(response => {
            contentDiv.textContent = response.data.someProperty;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            contentDiv.textContent = "An error occurred while fetching data.";
        });
});
