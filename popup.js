document.addEventListener("DOMContentLoaded", () => {
  const block = document.getElementById("block");
  const css = document.getElementById("css");

  chrome.storage.local.get(["rules"], (data) => {
    if (data.rules) {
      block.value = data.rules.block || "";
      css.value = data.rules.css || "";
    }
  });

  document.getElementById("save").addEventListener("click", () => {
    const rules = {
      block: block.value,
      css: css.value,
    };

    chrome.storage.local.set({ rules }, () => {
      alert("Saved!");
    });
  });
});