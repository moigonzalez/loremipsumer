import isInput from './utils/isInput';

const fillInput = input => {
  input.value = 'Lorem Ipsum'; // eslint-disable-line no-param-reassign
};

const handleInput = input => {
  isInput(input).map(fillInput);
};

chrome.extension.onMessage.addListener(message => {
  if (message.type === 'current') {
    handleInput(document.activeElement);
  }
});
