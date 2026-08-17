const filterButtons = document.querySelectorAll(".menu-filter");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    // Update active button

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("menu-filter--active");
    });

    button.classList.add("menu-filter--active");

    // Filter menu items

    menuItems.forEach((item) => {
      const itemCategory = item.dataset.category;

      if (selectedCategory === "all" || selectedCategory === itemCategory) {
        item.style.display = "grid";
      } else {
         item.style.display = "none";
      }
    });
  });
});
