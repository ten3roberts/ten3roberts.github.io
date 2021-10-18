const projects = [
  {
    title: "Ivy",
    description:
      "Modular game engine and application framework for Rust using Vulkan",
    link: "https://github.com/ten3roberts/ivy",
    linkIcon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
  },
  {
    title: "magpie",
    description:
      "Single header runtime memory leak detection and memory validation library",
    link: "https://github.com/ten3roberts/magpie",
    linkIcon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
  },
  {
    title: "manta",
    description: "Vulkan rendering engine in C99",
    link: "https://github.com/ten3roberts/manta",
    linkIcon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
  },
  {
    title: "libjson",
    description: "Single header DOM json serializer and deserializer in C99",
    link: "https://github.com/ten3roberts/libjson",
    linkIcon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
  },
  {
    title: "toggle.nvim",
    description:
      "Neovim plugin for toggling between true, false, and other different sets of values",
    link: "https://github.com/ten3roberts/toggle.nvim",
    linkIcon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
  },
];

function renderProject(parent, project) {
  let article = document.createElement("article");

  parent.appendChild(article);
  // parent.style.height = "200px";
  // parent.style.overflow = "hidden";

  let title = document.createElement("h3");
  title.textContent = project.title;

  article.appendChild(title);

  article.style.minHeight = "10em";

  // Link
  let link = document.createElement("button");
  link.classList.add("block-button", "float-end");
  link.onclick = () => goto(project.link);
  article.appendChild(link);

  if (project.linkIcon) {
    let icon = document.createElement("img");
    icon.src = project.linkIcon;
    icon.classList.add("large-icon");
    link.appendChild(icon);
  }

  // Description
  let description = document.createElement("p");
  description.textContent = project.description ? project.description : "";

  article.appendChild(description);
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
