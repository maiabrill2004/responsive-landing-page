//Creating menu
import { menuItemsList } from "./data/menu-data.js";
import { coffeeOrigins } from "./data/origins-data.js";
import { renderOrigins } from "./components/origins.js";
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
// ========================================
// COFFEE ORIGINS
// ========================================

const originsList = document.querySelector("#origins-list");
const originFilters = document.querySelectorAll(".origin-filter");

function updateOrigins(origins) {
  renderOrigins(origins, originsList);

  const originItems = document.querySelectorAll(".origin-item");

  originItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}

function filterOrigins(continent) {
  if (continent === "all") {
    return coffeeOrigins;
  }

  return coffeeOrigins.filter((origin) => origin.continent === continent);
}

originFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const continent = button.dataset.continent;

    originFilters.forEach((filter) => {
      filter.classList.remove("origin-filter--active");
    });

    button.classList.add("origin-filter--active");

    const filteredOrigins = filterOrigins(continent);

    updateOrigins(filteredOrigins);
  });
});

// Initial render

renderOrigins(coffeeOrigins, originsList);

// Intersection Observer

const originObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".origin-item").forEach((item) => {
  originObserver.observe(item);
});
