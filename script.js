const list = document.getElementById("infi-list");
let numberOfItems = 0;
function updateList(items) {
  for (let i = 1; i <= items; ++i) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${++numberOfItems}`;
    list.appendChild(listItem);
  }
}
updateList(10);
function renderNew(event) {
  updateList(2);
}
list.addEventListener("scroll", (event) => {
  const scrolledHeight = list.scrollTop;
  const elementHeight = list.clientHeight;
  const totalContentHeight = list.scrollHeight;
  if (scrolledHeight + elementHeight >= totalContentHeight - 5) {
    renderNew(event);
  }
});
