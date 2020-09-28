// IMPORT MODULES under test here:
import { translateToAYes } from '../translate-to-a-yes.test.js';

const test = QUnit.test;

test('translateToAYes should take in yes-like answers and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yep';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('translateToAYes should take in no-like answers and return false', (expect) => {

    const no = 'nope';
    const expected = false;

    const actual = translateToAYes(no);

    expect.equal(actual, expected);
});