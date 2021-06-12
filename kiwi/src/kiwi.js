import _ from "lodash";

import Heading from "./components/heading/heading";
import Image from "./components/image/image";

export default class Kiwi {
  render() {
    const heading = new Heading();
    heading.render(_.upperFirst("kiwi"));

    const image = new Image();
    image.render();
  }
}

new Kiwi().render();
