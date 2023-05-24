function addList() {
  const new_element = document.createElement("ul");
  document.body.appendChild(new_element);

  for (let i = 1; i < 11; i++) {
    const temp = document.createElement("li");
    temp.textContent = i;
    new_element.appendChild(temp);
  }
}
