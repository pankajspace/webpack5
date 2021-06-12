import _ from "lodash";

import ButtonHW from "./components/button/button";
import Heading from "./components/heading/heading";

export default function Greetings() {
  const heading = new Heading();
  heading.render(_.upperFirst("greetings"));

  const button = new ButtonHW();
  button.render();
}

Greetings();
