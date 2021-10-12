// Automatically generates a header for each page

let header = {
  h1: "Tej Roberts",
  content: "A personal blog containing project I've developed over the years.",
  nav: [
    {
      title: "About",
      href: "html/projects/about.html",
    },
    {
      title: "Github",
      href: "https://github.com/ten3roberts",
      icon: "../img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",
    },
    {
      title: "Gitlab",
      href: "https://gitlab.com/ten3roberts",
      icon: "https://about.gitlab.com/images/icons/logos/slp-icon.svg",
    },
  ],
};

function renderHeader() {
  let h1 = document.createElement("h1");
  h1.classList.add("mt-5", "text-center");
  h1.textContent = header.h1;
  this.appendChild(h1);

  let p = document.createElement("p");
  p.classList.add("mt-2", "text-center");
  p.textContent = header.content;
  this.appendChild(p);

  let nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand",
    "bg-dark",
    "justify-content-center",
  );

  this.appendChild(nav);

  let ul = document.createElement("ul");
  ul.classList.add("container-fluid", "justify-content-center", "navbar-nav");

  nav.appendChild(ul);

  for (i = 0; i < header.nav.length; i++) {
    let item = header.nav[i];
    let li = generateNavbarItem(item);

    ul.appendChild(li);
  }
}

// Creates and returns a navbar li
function generateNavbarItem(item) {
  let li = document.createElement("li");

  li.classList.add("sep");

  let button = document.createElement("button");
  button.classList.add("block-button");
  button.onclick = () => goto(item.href);

  li.appendChild(button);

  if (item.icon) {
    console.log("Icon: ", item.icon);
    let icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = item.icon;
    button.appendChild(icon);
  }

  let span = document.createElement("span");
  span.textContent = item.title;

  button.appendChild(span);

  return li;
}

let headers = document.getElementsByTagName("header");

for (i = 0; i < headers.length; i++) {
  renderHeader.call(headers[i]);
}
