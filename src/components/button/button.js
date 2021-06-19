import "./button.scss";

export default function ButtonHW() {
  const button = document.createElement("button");
  button.innerHTML = "Hello World";
  button.classList.add("button");
  const body = document.querySelector("body");
  button.onclick = function () {
    const p = document.createElement("p");
    p.innerHTML = "Hello Wrold!";
    p.classList.add("text");
    body.appendChild(p);
  }
  body.appendChild(button);
}
