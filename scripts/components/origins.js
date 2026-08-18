export function renderOrigins(origins, container) {
  container.innerHTML = "";

  origins.forEach((origin) => {
    const article = document.createElement("article");

    article.classList.add("origin-item");

    article.innerHTML = `
      <div class="origin-image">
        <img
          src="${origin.image}"
          alt="Coffee from ${origin.country}, ${origin.region}"
          loading="lazy"
        />
      </div>

      <div class="origin-content">

        <div class="origin-location">
          <span class="origin-continent">
            ${origin.continent}
          </span>

          <h3>${origin.country}</h3>

          <p class="origin-region">
            ${origin.region}
          </p>
        </div>

        <div class="origin-details">

          <p class="origin-description">
            ${origin.description}
          </p>

          <ul class="origin-notes">
            ${origin.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>

        </div>

      </div>
    `;

    container.appendChild(article);
  });
}
