console.debug('This is console.debug()');
console.error('This is console.error()');
console.info('This is console.info()');
console.log('This is console.log()');
console.warn('This is console.warn()');
console.log('This it first inline log', 'This is second inline log')
console.log('Inline stuff', 69, ['array 1', 'array 2'])
console.log('Object log {object: \'object\'}', {object: 'object'})
console.log('String substitute: %s', 'string');
console.log('Number substitute: %i', 11);
console.log('Object substitute: %o', {object: 'object'});
console.log(`Template literal string: ${'string'}, and a number: ${71}`);
console.log('%cThis is large red text', 'color: red; font-size: 30px;');
console.log('This is %cred text %cand this is %cgreen text.', 'color: red;', '', 'color: green;');
console.log(
    '%cHello there!', `
    background: white;
    border: 3px solid red;
    color: red;
    font-size: 50px;
    margin: 40px;
    padding: 20px;
`);

//styling output with styleVariables
const clearStyles = '';
const largeText = 'font-size: 20px;';
const yellowText = 'color: yellow;';
const largeRedText = 'font-size: 20px; color: red;';
const largeGreenText = 'font-size: 20px; color: green;';

console.log(
    `This is %clarge red text. %cThis is %clarge green text. %cThis is %clarge yellow text.`,
    largeRedText,
    clearStyles,
    largeGreenText,
    clearStyles,
    largeText + yellowText
);

//counting
console.count('count label A');
console.count('count label A');
console.count('count label A');
console.count('count label B');
console.count('count label A');
console.countReset('count label A');
console.count('count label B');
console.count('count label A');
console.count('count label B');

//grouping
console.group('outer group');
console.log('outer one');
console.log('outer two');
console.group('inner group');
console.log('inner one');
console.log('inner two');
console.log('inner three');
console.groupEnd();
console.log('outer three');
console.groupEnd();

//tables
let basicArray = [
    'one',
    'two',
    'three'
];
console.table(basicArray);
