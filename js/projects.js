const projects = [
  {
    title: "Ivy",
    description:
      "Modular game engine and application framework for Rust using Vulkan",
    link: "https://github.com/ten3roberts/ivy",
  },
  {
    title: "hecs-schedule",
    description: "Workload executor for parallel system execution for hecs",
    link: "https://github.com/ten3roberts/hecs-schedule"
  },
  {

    title : "hecs-hierarchy",
    description : "Hierarchy implementation for declaring relationships between entities",
    link: "https://github.com/ten3roberts/hecs-hierarchy"
  },
  {
    title: "bsp-pathfinding",
    description: "Path finding and search space generation using Binary Spatial Partitioning",
    link: "https://github.com/ten3roberts/bsp-pathfinding",
  },
  {
    title: "ticketsystem",
    description:
      "Proof of concept ticketing system for concerts using SQLite in C",
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

  // Left part with title and description
  let left = document.createElement("div");
  article.appendChild(left);

  let title = document.createElement("h3");
  title.textContent = project.title;

  left.appendChild(title);

  // Description
  let description = document.createElement("p");
  description.textContent = project.description ? project.description : "";

  left.appendChild(description);

  // Right part with button icon
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
