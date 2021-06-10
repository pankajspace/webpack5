import "./image.scss";
import kiwiImage from "./kiwi.jpg";

export default class Image {
  render() {
    const img = document.createElement("img");
    img.src = kiwiImage;
    img.alt = "Kiwi image";
    const body = document.querySelector("body");
    body.appendChild(img);
  }
}
