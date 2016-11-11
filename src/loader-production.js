var fs = require('fs');
var mime = require('mime-types')

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    fs.readFile(load.address, function(error, result) {
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
  return [
    'export default new Blob([\'' + load.metadata.data + '\'], {',
    '  type: \'' + load.metadata.contentType + '\'',
    '});'
  ].join('\n');
}
