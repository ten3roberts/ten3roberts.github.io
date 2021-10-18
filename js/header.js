// Automatically generates a header for each page

const headerTemplate = {
  title: "Tej Roberts",
  titleClick: () => goto("/index.html"),
  content: "A personal blog containing projects I've developed over the years.",
  navStyle: "button",
  titleStyle: "h1",
  nav: [
    {
      title: "About",
      href: "/html/about.html",
    },
    {
      title: "Gallery",
      href: "/html/gallery.html",
    },
    {
      title: "Projects",
      href: "/index.html",
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

const footerTemplate = {
  title: "Find me elsewhere …",
  navStyle: "button",
  titleStyle: "h4",
  nav: [
    {
      title: "Email",
      href: "mailto:ten3roberts@gmail.com",
      icon:
        "https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg",
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
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/tim-roberts-b70a2b222",
      icon:
        "https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png",
    },
  ],
};

function renderHeader(header) {
  let h1 = document.createElement(header.titleStyle);
  h1.classList.add("mt-5", "text-center");
  h1.textContent = header.title;

  if (header.titleClick) {
    h1.onclick = header.titleClick;
  }

  this.appendChild(h1);

  if (header.content) {
    let p = document.createElement("p");
    p.classList.add("mt-2", "text-center");
    p.textContent = header.content;
    this.appendChild(p);
  }

  let nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand",
    "justify-content-center",
  );

  this.appendChild(nav);

  let ul = document.createElement("ul");
  ul.classList.add("container-fluid", "justify-content-center", "navbar-nav");

  nav.appendChild(ul);

  for (i = 0; i < header.nav.length; i++) {
    let item = header.nav[i];
    if (header.navStyle == "button") {
      var li = generateButton(item);
    } else {
      var li = generateSpan(item);
    }

    ul.appendChild(li);
  }
}

// Creates and returns a navbar li
function generateButton(item) {
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

// Creates and returns a navbar li
function generateSpan(item) {
  let li = document.createElement("li");

  li.classList.add("sep", "mx-5");

  let title = document.createElement("h4");
  title.textContent = item.title + ":";

  li.appendChild(title);

  let a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.href;

  li.appendChild(a);

  if (item.icon) {
    console.log("Icon: ", item.icon);
    let icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = item.icon;
    a.appendChild(icon);
  }

  return li;
}

let header = document.getElementById("header");

if (header) {
  renderHeader.call(header, headerTemplate);
}

let footer = document.getElementById("footer");

if (footer) {
  renderHeader.call(footer, footerTemplate);
}
