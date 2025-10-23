async function loadProjects() {
  const res = await fetch("projects.json");
  const data = await res.json();
  const container = document.getElementById("projects");

  data.vols.forEach((vol) => {
    const section = document.createElement("section");
    section.className = "space-y-10";

    // VOL 标题
    const title = document.createElement("h2");
    title.className =
      "text-3xl font-bold text-center tracking-wide uppercase";
    title.textContent = `VOL ${vol.id}`;
    section.appendChild(title);

    // 项目内容
    vol.projects.forEach((project) => {
      const row = document.createElement("div");
      row.className = "grid grid-cols-4 gap-6 items-start";

      const info = document.createElement("div");
      info.innerHTML = `
        <div class="bg-base-300 p-2 font-medium">${project.name}</div>
        <p class="mt-2 text-sm opacity-80">${project.description}</p>
      `;

      const images = document.createElement("div");
      images.className = "col-span-3 grid grid-cols-4 gap-6";
      project.images.forEach((img) => {
        const card = document.createElement("div");
        card.className =
          "aspect-square bg-base-300 rounded-box overflow-hidden hover:opacity-80 transition";
        card.style.backgroundImage = `url(${project.imagePath + img}.webp)`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        images.appendChild(card);
      });

      row.appendChild(info);
      row.appendChild(images);
      section.appendChild(row);
    });

    container.appendChild(section);
  });
}

loadProjects();
