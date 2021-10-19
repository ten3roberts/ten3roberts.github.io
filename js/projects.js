const projects = [
  {
    title: "Ivy",
    description:
      "Modular game engine and application framework for Rust using Vulkan",
    link: "https://github.com/ten3roberts/ivy",
  },
  {
    title: "ticketsystem",
    description: "Proof of concert ticketing system for concerts using SQLite",
    link: "https://gitlab.com/ten3roberts/ticketsystem",
  },
  {
    title: "magpie",
    description:
      "Single header runtime memory leak detection and memory validation library",
    link: "https://github.com/ten3roberts/magpie",
  },
  {
    title: "manta",
    description: "Vulkan rendering engine in C99",
    link: "https://github.com/ten3roberts/manta",
  },
  {
    title: "libjson",
    description: "Single header DOM json serializer and deserializer in C99",
    link: "https://github.com/ten3roberts/libjson",
  },
  {
    title: "toggle.nvim",
    description:
      "Neovim plugin for toggling between true, false, and other different sets of values",
    link: "https://github.com/ten3roberts/toggle.nvim",
  },
];

function renderProject(parent, project) {
  let article = document.createElement("article");

  parent.appendChild(article);
  article.classList.add(
    "d-flex",
    "flex-xl-row",
    "justify-content-between",
    "align-items-center",
  );
  article.style.minHeight = "10em";
  // parent.style.height = "200px";
  // parent.style.overflow = "hidden";

  let left = document.createElement("div");
  article.appendChild(left);

  let title = document.createElement("h3");
  title.textContent = project.title;

  left.appendChild(title);

  // Description
  let description = document.createElement("p");
  description.textContent = project.description ? project.description : "";

  left.appendChild(description);

  let link = document.createElement("a");
  link.textContent = project.link;
  link.href = project.link;
  left.appendChild(link);

  // Link
  let button = document.createElement("button");
  button.classList.add("block-button");
  button.onclick = () => goto(project.link);
  button.value = project.link;
  article.appendChild(button);

  let icon = document.createElement("i");

  // Automatically choose icon based on project link
  let iconName = project.link.includes("github.com")
    ? "fa-github"
    : project.link.includes("gitlab.com")
    ? "fa-gitlab"
    : "fa-archive";

  icon.classList.add("fa", "fa-3x", iconName);

  button.appendChild(icon);

  // if (project.linkIcon) {
  //   let icon = document.createElement("img");
  //   icon.src = project.linkIcon;
  //   icon.classList.add("large-icon");
  //   link.appendChild(icon);
  // }
}

function renderProjects() {
  console.log("Rendering projects");
  for (i = 0; i < projects.length; i++) {
    let project = projects[i];
    console.log("Rendering project: ", project.title);

    renderProject(this, project);
  }
}

let container = document.getElementById("projects");

if (container) {
  renderProjects.call(container);
}

console.log("Loaded js");
