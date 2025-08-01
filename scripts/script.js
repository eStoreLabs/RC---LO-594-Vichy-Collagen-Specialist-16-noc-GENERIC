const accTab = document.querySelectorAll(".acc-tab");

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener("click", function () {
    this.classList.add("active");
    let accTabContent = this.nextElementSibling;

    const hideContent = () => {
      accTabContent.style.maxHeight = null;
      this.classList.remove("active");
    };

    const showContent = () => {
      accTabContent.style.maxHeight = accTabContent.scrollHeight + "px";
      this.classList.add("active");
    };

    if (accTabContent.style.maxHeight) {
      hideContent();
    } else {
      showContent();
    }
  });
}

window.addEventListener("resize", () => {
  accTab.forEach((tab) => {
    if (tab.classList.contains("active")) {
      const accTabContent = tab.nextElementSibling;
      accTabContent.style.maxHeight = accTabContent.scrollHeight + "px";
    }
  });
});
