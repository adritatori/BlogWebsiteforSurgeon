function openTab(evt, tabId) {
  // Hide all tab content
  var tabContent = document.getElementsByClassName("tab-pane");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove "active" class from all tabs
  var tabLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";

  // Add "active" class to the clicked tab
  evt.currentTarget.classList.add("active");
}

var currentPage = 1; // Current page number
var totalPages = 3; // Total number of pages

function previousPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

function goToPage(page) {
  currentPage = page;
  // Perform actions based on the selected page
  console.log("Navigating to page:", currentPage);

  // Update the active state of pagination links
  var paginationLinks = document.getElementsByClassName("page-link");
  for (var i = 0; i < paginationLinks.length; i++) {
    paginationLinks[i].classList.remove("active");
  }
  paginationLinks[currentPage].classList.add("active");
}