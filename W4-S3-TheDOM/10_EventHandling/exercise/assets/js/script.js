// 1. use document.getElementById to select the searchTerm Button
const searchInput = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
const searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", search);

function search() {
  // 4. use the value property of the searchInput to get the search term
  const searchValue = searchInput.value;
  console.log(searchValue);
  // 5. select the searches div using document.getElementById
  const recentSearches = document.getElementById("searches");
  // 6. create a new li element using document.createElement
  const newSearchItem = document.createElement("li");
  // 7. set the innerHTML of the new paragraph to the search term
  //newSearchItem.innerHTML = "`<p>${searchInput.textContent}</p>`";
  newSearchItem.innerHTML = "<p>"+searchValue+"</p>";
  // 8. append the new paragraph to the searches div
  recentSearches.appendChild(newSearchItem);
  window.localStorage.appendChild(newSearchItem)
}

function load()
{
  const recentSearches = document.getElementById("searches");
  recentSearches.append
}
