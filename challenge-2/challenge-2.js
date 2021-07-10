// Run only on small devices
if (window.innerWidth < 720) {
  function challenge() {
    // Get first result element
    let firstProduct = document.getElementsByClassName("s-result-item")[2];

    // Create element to put after firstProduct
    let adElement = document.createElement("div");
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

  // Fire initially
  challenge();

  // Mutation observer watching search ID for attribute change
  const targetNode = document.body;
  const config = {
    attributes: true,
    childList: true,
    attributeFilter: [".s-spinner-parent"],
  };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        challenge();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
