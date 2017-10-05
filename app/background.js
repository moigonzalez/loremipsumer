// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.type) {
    case 'current':
      current();
      break;
  }
  return true;
});

const current = () => {
  chrome.tabs.getSelected(null, tab => {
    chrome.tabs.sendMessage(tab.id, { type: 'current' });
  });
};
