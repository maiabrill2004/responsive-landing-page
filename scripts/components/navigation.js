export function renderNavigation(items, container) {
  container.innerHTML = "";

  const list = document.createElement("ul");

  items.forEach((item) => {
    const listItem = document.createElement("li");

    const link = document.createElement("a");

    link.href = item.target;
    link.textContent = item.label;

    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  container.appendChild(list);
}
