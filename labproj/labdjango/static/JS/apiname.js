"use strict";
// API Card
// API Name: Nager.Date
// Base URL: https://date.nager.at/api/v3/PublicHolidays/2026/RO
// Endpoint used: https://date.nager.at/api/v3/PublicHolidays/2026/RO
// HTTP method: GET
// Status code seen: 200
// Fields used: name, types
// Relevance: It's useful to now when public holidays are happening in a given year to better schedule tasks
// Generic helper - works with any type T
async function getJSON(url) {
    // Create an AbortController for the request timeout
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    try {
        const response = await fetch(url, { signal: controller.signal });
        // fetch() does NOT reject on 404/500 - we must check ok!
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return (await response.json());
    }
    finally {
        clearTimeout(timer);
    }
}
const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("queryInput");
const searchBtn = document.getElementById("searchBtn");
const resultsEl = document.getElementById("results");
const statusEl = document.getElementById("status");
// Build the request URL with the search parameter
function buildURL(query) {
    const BASE_URL = "https://date.nager.at/api/v3/PublicHolidays/2026/RO?"; // base URL of your chosen API
    return `${BASE_URL}?=${encodeURIComponent(query)}`;
}
async function search() {
    const query = queryInput.value.trim();
    if (!query) {
        setStatus("Please enter a search term.");
        return;
    }
    // Disable the button while the request is in progress
    searchBtn.disabled = true;
    setStatus("Loading...");
    resultsEl.innerHTML = "";
    try {
        console.log(buildURL(query));
        const items = await getJSON(buildURL(query));
        render(items);
        // Save the last search term (Step 8)
        localStorage.setItem("lastQuery", query);
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        setStatus(`Load failed: ${msg}`);
    }
    finally {
        searchBtn.disabled = false; // re-enable thebutton
    }
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    search();
});
function setStatus(text) {
    statusEl.textContent = text;
}
// Create a DOM card for one result item
// IMPORTANT: use createElement + textContent, NOT innerHTML with API data
function createCard(item) {
    //replace ... with your type
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = item.name; // the main field of the item;
    const detail = document.createElement("p");
    detail.textContent = item.types.join(" "); // a secondary field
    card.appendChild(title);
    card.appendChild(detail);
    return card;
}
// Render an array of items into the results area
function render(items) {
    // replace ... withyour type
    resultsEl.innerHTML = ""; // OK: clearing ourown container
    if (items.length === 0) {
        setStatus("No results found.");
        return;
    }
    items.forEach((item) => resultsEl.appendChild(createCard(item)));
    setStatus(`Loaded ${items.length} result(s).`);
}
window.addEventListener("DOMContentLoaded", () => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery) {
        queryInput.value = lastQuery;
        //Optional: trigger the search automatically
        search();
    }
});
