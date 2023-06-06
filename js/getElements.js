function getElements(selection) {
  const elements = document.querySelector(selection);
  if (elements) return elements;
  else throw Error("element not selected...");
}

export default getElements;
