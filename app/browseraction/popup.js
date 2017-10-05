window.onload = function() {
  document.getElementById('current').onclick = function() {
    chrome.extension.sendMessage({
      type: 'current'
    });
  };
};
