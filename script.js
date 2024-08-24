document.addEventListener("DOMContentLoaded", () => {
  // Hide all extra-options initially on page load
  const extraOptions = document.querySelectorAll(".extra-options");
  extraOptions.forEach((box) => (box.style.display = "none"));

  const radios = document.querySelectorAll('input[name="offer"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      // Hide all extra-options initially
      extraOptions.forEach((box) => (box.style.display = "none"));

      // Show the selected box's extra options
      const selectedBox = radio.closest(".box").querySelector(".extra-options");
      if (selectedBox) {
        selectedBox.style.display = "flex";
      }

      // Hide the discount label of the selected box and show others
      const discountLabels = document.querySelectorAll(".discount-label-1");
      discountLabels.forEach((label) => {
        if (label.closest(".box") === radio.closest(".box")) {
          label.style.display = "none";
        } else {
          label.style.display = "block"; // Ensure other labels are visible
        }
      });

      // Hide the parent div of the selected box and show others
      const parentDivs = document.querySelectorAll(".parent");
      parentDivs.forEach((parentDiv) => {
        if (parentDiv.closest(".box") === radio.closest(".box")) {
          parentDiv.style.display = "none";
        } else {
          parentDiv.style.display = "flex"; // Ensure other parent divs are visible
        }
      });
    });
  });
});
