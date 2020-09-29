import { translateToAYes } from '../translate-to-a-yes.test.js';

const test = QUnit.test;

test('translateToAYes should take in yes-like answers and return true', (expect) => {

    const yes = 'yep';
    const expected = true;
    
    const actual = translateToAYes(yes);

    expect.equal(actual, expected);
});

test('translateToAYes should take in no-like answers and return false', (expect) => {

    const no = 'nope';
    const expected = false;

    const actual = translateToAYes(no);

    expect.equal(actual, expected);
});