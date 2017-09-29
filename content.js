chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  switch (message.type) {
    case 'current':
      fillInput(document.activeElement);
      break;
  }
});

const fillInput = input => {
  if (input.tagName === 'INPUT') {
    input.value = 'Lorem Ipsum';
  }
};
