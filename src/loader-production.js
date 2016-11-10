var fs = require('fs');
var mime = require('mime-types')
var path = require('path');

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    fs.readFile(load.address, function(error, result) {
      if (error) {
        reject(error);
        return;
      }

      var type = mime.lookup(load.address);


      resolve('data:' + type + ';base64,' + result.toString('base64'));
    });
  });
};

exports.translate = function(load) {
  return 'export default \'' + load.source + '\'';
}
