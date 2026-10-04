import greet, { userInfo } from './15_modules_export.js';

console.log(greet());
console.log(`Imported User: ${userInfo.name}, Course: ${userInfo.course}`);