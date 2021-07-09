// Run only on small devices
if (window.innerWidth < 720) {
  /* 
  Create fixed bar div with containers and internal elements
  */
  // fixed bar
  const fixedBar = document.createElement("div");
  fixedBar.classList.add("fixed-bar__challenge-1");
  // inner container
  const container = document.createElement("div");
  container.classList.add("container__challenge-1");
  // quantity button
  const quant = document.createElement("div");
  quant.classList.add("quant__challenge-1");
  quant.innerHTML = `Qty: <span id="quant-update__challenge-1">1</span> <i class="a-icon a-icon-dropdown icon-pos__challenge-1"></i>`;
  // add to bag (atb)
  const atb = document.createElement("div");
  atb.classList.add("atb__challenge-1");
  atb.innerHTML = `
  <div class="a-button a-button-primary a-button-icon atb-btn__challenge-1">
    <i class="a-icon a-icon-cart" style="display: block;float:left;"></i>
    Add to Basket
  </div>
  `;

  // append all
  container.appendChild(quant);
  container.appendChild(atb);
  fixedBar.appendChild(container);

  document.body.appendChild(fixedBar);

  /* 
  Simulate click on buttons
  */
  // quantity
  quant.onclick = function () {
    quantSim();
  };
  function quantSim() {
    document.getElementById("a-autoid-0-announce").click();
  }

  // add to bag
  atb.onclick = function () {
    atbSim();
  };
  function atbSim() {
    document.getElementById("add-to-cart-button").click();
  }

  const targetNode = document.getElementById("mobileQuantitySelection");
  const config = { attributes: true, childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        // define inner text for quantity numeral
        var quantNum =
          document.getElementsByClassName("a-dropdown-prompt")[0].innerText;
        quant.getElementsByTagName("span")[0].innerText = quantNum;
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
