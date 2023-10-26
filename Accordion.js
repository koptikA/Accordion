const url = "accordion/Accordion.html";
const request = fetch(url).then((response) => response.text());

export class Accordion extends HTMLElement {
  async connectedCallback() {
    const template = await request;

    this.innerHTML = template;

    let accordionItems = [...document.querySelectorAll(".accordion-card")];

    accordionItems.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      let currentItem = e.target.closest(".accordion-card");
      currentItem.classList.toggle("active");
    }
  }
}