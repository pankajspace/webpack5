import "./navigation.scss";

export default function Navigation(navigationItems) {
  const navItems = navigationItems.map((navItem) => {
    return `
      <li>
        <a href="${navItem.url}" >${navItem.title}</a>
      </li>
    `
  });
  const ul = document.createElement("ul");
  ul.innerHTML = navItems.join("");
  ul.classList.add("navigation-bar");
  document.querySelector("body").appendChild(ul);
}
