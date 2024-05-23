// script.js
document.getElementById("toggleButton").addEventListener("click", function() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
  } else {
      sidebar.style.width = "250px";
  }
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("sidebar").style.width = "0";
});
