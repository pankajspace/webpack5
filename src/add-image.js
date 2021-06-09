import KiwiImage from "./kiwi.jpg";
import altText from "./altText.txt";

export default function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = KiwiImage;
  const body = document.querySelector("body");
  body.appendChild(img);
}
