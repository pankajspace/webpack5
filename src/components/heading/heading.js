import "./heading.scss";

export default class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpack 5 is awesome!";
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}

