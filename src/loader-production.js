var isWindows = typeof process != 'undefined' && process.platform && process.platform.match(/^win/);

var fs = require('fs');
var mime = require('mime-types')

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    fs.readFile(load.address.substr(isWindows ? 8 : 7), function(error, result) {
      if (error) {
        reject(error);
        return;
      }

      var contentType = mime.lookup(load.address);

      load.metadata.contentType = contentType;
      load.metadata.data = result;

      resolve('');
    });
  });
};

exports.translate = function(load) {
  load.metadata.format = 'esm';

  return [
    'const base64 = \'' + load.metadata.data.toString('base64') + '\';',
    'const byteCharacters = atob(base64);',
    'const byteArray = new Uint8Array(byteCharacters.length);',
    'for (var i = 0; i < byteCharacters.length; i ++) {',
    '  byteArray[i] = byteCharacters.charCodeAt(i);',
    '}',
    'export default new Blob([byteArray.buffer], { type: \'' + load.metadata.contentType + '\' })'
  ].join('\n');
}
