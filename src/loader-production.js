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
    'export default new Blob([\'' + load.metadata.data.toString('base64') + '\'], {',
    '  type: \'' + load.metadata.contentType + '\'',
    '});'
  ].join('\n');
}
