import _ from "lodash";

import Heading from "./components/heading/heading";
import Image from "./components/image/image";

const heading = new Heading();
heading.render(_.upperFirst("kiwi"));

const image = new Image();
image.render();

import("GreetingsApp/GreetingsButton").then((GreetingsButtonModule) => {
  const GreetingsButton = GreetingsButtonModule.default;
  const greetingsButton = new GreetingsButton();
  greetingsButton.render();
});

if (process.env.NODE_ENV === "production") {
  console.log("MODE: production");
} else if (process.env.NODE_ENV === "development") {
  console.log("MODE: development");
}