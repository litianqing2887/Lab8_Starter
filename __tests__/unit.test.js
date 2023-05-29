// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test a valid number', () => {
    expect(functions.isPhoneNumber('(999)999-9999')).toBe(true);
});
test('test a valid number', () => {
    expect(functions.isPhoneNumber('999-999-9999')).toBe(true);
});
test('test an invalid number', () => {
    expect(functions.isPhoneNumber(9999)).toBe(false);
});
test('test an invalid number', () => {
    expect(functions.isPhoneNumber()).toBe(false);
});  


test('test a valid email', () => {
    expect(functions.isEmail('xxx@gmail.com')).toBe(true);
});
test('test a valid email', () => {
    expect(functions.isEmail('xxx@ucsd.edu')).toBe(true);
});
test('test an invalid email', () => {
    expect(functions.isEmail('google.com')).toBe(false);
});
test('test an invalid email', () => {
    expect(functions.isEmail('@xxx')).toBe(false);
});


test('test a strong password', () => {
    expect(functions.isStrongPassword('x9999')).toBe(true);
});
test('test a strong password', () => {
    expect(functions.isStrongPassword('xxx999u')).toBe(true);
});
test('test a not strong password', () => {
    expect(functions.isStrongPassword('999u')).toBe(false);
});
test('test a not strong password', () => {
    expect(functions.isStrongPassword('xxx999uairhbauwlhgurhqw')).toBe(false);
});


test('test a valid date', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
test('test a valid date', () => {
    expect(functions.isDate('14/35/9183')).toBe(true);
});
test('test an invalid date', () => {
    expect(functions.isDate('14/35/91283')).toBe(false);
});
test('test an invalid date', () => {
    expect(functions.isDate('14/3183')).toBe(false);
});


test('test a hex color', () => {
    expect(functions.isHexColor('000000')).toBe(true);
});
test('test a hex color', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});
test('test an invalid hex color', () => {
    expect(functions.isHexColor('00000')).toBe(false);
});
test('test an invalid hex color', () => {
    expect(functions.isHexColor('xmca')).toBe(false);
});