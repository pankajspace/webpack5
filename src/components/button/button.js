class ButtonHW {

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello Wrold!";
      body.appendChild(p);
    }
    body.appendChild(button);
  }

}

export default ButtonHW;