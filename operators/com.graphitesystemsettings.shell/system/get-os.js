const os = require('node:os'); 
// import os_name
console.log(os.type()); // "Windows_NT"
console.log(os.release()); // "10.0.14393"
console.log(os.platform()); // "win32"