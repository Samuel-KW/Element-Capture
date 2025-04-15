// Element to monitor
const elementParent = document.querySelector('div[data-id="captionsComponent"]');

// Array to store captured text
const capturedText = [];

// Clean text content
function getCleanText(parent) {
  return parent.innerText.trim();
}

// Start event observer
if (typeof elementParent !== 'undefined' && elementParent instanceof HTMLElement) {
  let lastText = "";

  const observer = new MutationObserver(() => {
    const currentText = getCleanText(elementParent);
    if (currentText && currentText !== lastText) {
      capturedText.push(currentText);
      lastText = currentText;
      console.log("Captured content:", currentText);
    }
  });

  observer.observe(elementParent, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  console.log("Element observer started.");
} else {
  console.error("elementParent is not defined or not an HTMLElement.");
}
