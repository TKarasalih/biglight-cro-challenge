// Run only on small devices
if (window.innerWidth < 720) {
  function challenge() {
    // Get first result element
    var firstProduct = document.getElementsByClassName("s-result-item")[3];

    // Create element to put after firstProduct
    var adElement = document.createElement("div");
    adElement.classList.add("ad__challenge-2");
    adElement.innerHTML = `
      <div class="container__challenge-2">
          <div class="text-center__challenge-2">
              <h2 class="text-white__challenge-2">
                  Get 50% off<br/>
                  all Amazon Products
              </h2>
              <p class="text-white__challenge-2 my__challenge-2">
                  Use code: <span class="text-orange__challenge-2"><u>AZ50</u></span>
              </p>
              <small class="text-white__challenge-2">
              T&Cs Apply
              </small>
          </div>
      </div>
    `;

    // Add adElement to DOM
    firstProduct.parentNode.insertBefore(adElement, firstProduct.nextSibling);
  }

  challenge();

  const targetNode = document.getElementById("search");
  const config = { attributes: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes") {
        challenge();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
