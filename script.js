const detailsElements = document.querySelectorAll(".accordion details");
const summaryElements = document.querySelectorAll(".accordion summary");

summaryElements.forEach((summary) => {
  summary.addEventListener("click", () => {
    // Close all the details elements
    detailsElements.forEach((details) => {
      if (details !== summary.parentNode) {
        details.removeAttribute("open");
      }
    });
  });
});
