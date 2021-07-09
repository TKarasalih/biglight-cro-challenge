// Run only on small devices
if (window.innerWidth < 720) {
  // Get first result element
  const firstProduct = document.getElementsByClassName("s-result-item")[3];

  // Create element to put after firstProduct
  const adElement = document.createElement("div");
  adElement.classList.add("ad__challenge-2");

  document.body.appendChild(adElement);
}
