// Path처리 모듈
var path = require('path');

var dir = ['users', 'jun', 'test'];
//path.sep이 배열 요소 나열, path.join이 주소형태로 변경
var projDir = dir.join(path.sep);
console.log(projDir);

var exePath = path.join(projDir, 'test.ext');
console.log(exePath);

var dirName = path.dirname(exePath);
var baseName = path.basename(exePath);
var extName = path.extname(exePath);

console.log("Directory = %s", dirName);
console.log("Base Name= %s", baseName);
console.log("Ext Name = %s", extName);
