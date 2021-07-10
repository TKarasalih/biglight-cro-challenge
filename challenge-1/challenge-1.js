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
  quant.innerHTML = `Qty: <span id="quant-update__challenge-1" onclick="quantSim()">1</span> <i class="a-icon a-icon-dropdown icon-pos__challenge-1"></i>`;
  // add to bag (atb)
  const atb = document.createElement("div");
  atb.classList.add("atb__challenge-1");
  atb.innerHTML = `
  <div class="a-button a-button-primary a-button-icon atb-btn__challenge-1" onclick="atbSim()">
    <i class="a-icon a-icon-cart" style="display: block;float:left;"></i>
    Add to Basket
  </div>
  `;
  // edit original quantity button to always be in viewport until intersection observer below
  const originalQuant = document.getElementById("a-autoid-0");

  // append all
  container.appendChild(quant);
  container.appendChild(atb);
  fixedBar.appendChild(container);

  document.body.appendChild(fixedBar);

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

  // Intersection observer for watching where the original quantity field is
  function e(entries) {
    entries.forEach(function (entry) {
      fixedBar.style.bottom = entry.isIntersecting ? "-100px" : "0";
      originalQuant.style.position = entry.isIntersecting ? "initial" : "fixed";
      originalQuant.style.top = entry.isIntersecting ? "auto" : "50%";
      originalQuant.style.opacity = entry.isIntersecting ? "1" : "0";
      originalQuant.style.zIndex = entry.isIntersecting ? "initial" : "-1000";
    });
  }

  var intObserver = new IntersectionObserver(e);
  intObserver.observe(targetNode);

  /* 
  Simulate click on buttons
  */
  // quantity
  function quantSim() {
    document.getElementById("a-autoid-0-announce").click();
  }
  // add to bag
  function atbSim() {
    document.getElementById("add-to-cart-button").click();
  }
}
