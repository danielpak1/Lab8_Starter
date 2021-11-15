// unit.test.js

const {expect} = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Checking phone number', () => {
    expect(functions.isPhoneNumber('621-213-3218')).toBe(true)
});
test('Checking phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true)
});
test('Checking phone number', () => {
    expect(functions.isPhoneNumber('anyeonghaseyo')).toBe(false)
});
test('Checking phone number', () => {
    expect(functions.isPhoneNumber('owaowa')).toBe(false)
});

test('Checking email', () => {
    expect(functions.isEmail('dapak@ucsd.edu')).toBe(true)
});
test('Checking email', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true)
});
test('Checking email', () => {
    expect(functions.isEmail('123-456-7890')).toBe(false)
});
test('Checking email', () => {
    expect(functions.isEmail('omonah')).toBe(false)
});

test('Checking password', () => {
    expect(functions.isStrongPassword('NotPassword')).toBe(true)
});
test('Checking password', () => {
    expect(functions.isStrongPassword('O482nc')).toBe(true)
});
test('Checking password', () => {
    expect(functions.isStrongPassword('supercalifragilisticexpedialidocious')).toBe(false)
});
test('Checking password', () => {
    expect(functions.isStrongPassword('1234')).toBe(false)
});

test('Checking date', () => {
    expect(functions.isDate('1/12/2012')).toBe(true)
});
test('Checking date', () => {
    expect(functions.isDate('01/01/1970')).toBe(true)
});
test('Checking date', () => {
    expect(functions.isDate('6/6/6')).toBe(false)
});
test('Checking date', () => {
    expect(functions.isDate('7/7/7/7/7/7/7')).toBe(false)
});

test('Checking color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true)
});
test('Checking color', () => {
    expect(functions.isHexColor('#DD0044')).toBe(true)
});
test('Checking color', () => {
    expect(functions.isHexColor('$FFFFFF')).toBe(false)
});
test('Checking color', () => {
    expect(functions.isHexColor('blue')).toBe(false)
});