import "./heading.scss";

export default class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    h1.innerHTML = `This is ${pageName} page!`;
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}

