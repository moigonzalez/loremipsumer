import { Maybe } from 'ramda-fantasy';

const Nothing = Maybe.Nothing;

const isInput = input => (input.tagName === 'INPUT' ? Maybe.of(input) : Nothing());

export default isInput;
