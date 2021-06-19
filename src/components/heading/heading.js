import "./heading.scss";

export default function Heading() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Webpack 5 is awesome!";
  const body = document.querySelector("body");
  body.appendChild(h1);
}
