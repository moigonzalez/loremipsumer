import isInput from '../isInput';
import { Maybe } from 'ramda-fantasy';

const Nothing = Maybe.Nothing;

const setup = inputType =>
  `
    <${inputType} ${inputType === 'input' ? 'type="text"' : ''} id="el"></${inputType}>
  `;

const tearDown = () => {
  document.body.innerHTML = null;
};

describe('The isInput function', () => {
  test("returns a Nothing if it's not an input", () => {
    document.body.innerHTML = setup('div');
    const el = document.getElementById('el');
    const expected = Nothing();
    const actual = isInput(el);
    expect(actual).toEqual(expected);
  });

  test("returns a Maybe of the input if it's an input", () => {
    document.body.innerHTML = setup('input');
    const el = document.getElementById('el');
    const expected = Maybe(el);
    const actual = isInput(el);
    expect(actual).toEqual(expected);
  });
});
