chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const marker = document.documentElement.getAttribute('data-godark');

      if (marker === 'enabled') {
        location.reload();
      } else {
        document.documentElement.setAttribute('data-godark', 'enabled');
      }
    }
  });

  // Inject CSS only if not already active
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['dark-mode.css']
  });
});
