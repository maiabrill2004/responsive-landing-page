//Creating menu
import { menuItemsList } from "./data/menu-data.js";

const menuList = document.querySelector("#menu-list");

function renderMenu(items) {
  menuList.innerHTML = "";

  items.forEach((item) => {
    const article = document.createElement("article");

    article.classList.add("menu-item");
    article.dataset.category = item.category;

    article.innerHTML = `
      <div class="menu-item-content">

        <div>
          <span class="menu-item-category">
            ${item.category.toUpperCase()}
          </span>

          <h3>${item.name}</h3>
        </div>

        <p>${item.description}</p>

      </div>

      <span class="menu-item-price">
        ${item.price}
      </span>
    `;

    menuList.appendChild(article);
  });
}

renderMenu(menuItemsList);
//Sorting Feature Menu
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
