import ButtonHW from "./components/button/button";
import Heading from "./components/heading/heading";
import Image from "./components/image/image";

const heading = new Heading();
heading.render();

const button = new ButtonHW();
button.render();

if (process.env.NODE_ENV === "production") {
  console.log("MODE: production");
} else if (process.env.NODE_ENV === "development") {
  console.log("MODE: development");
}