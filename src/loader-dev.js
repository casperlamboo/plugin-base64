exports.fetch = function(load) {
  return loadBlob(load.address).then(function (blob) {
    load.metadata.blob = blob;

    return '';
  });
};

exports.instantiate = function(load) {
  return load.metadata.blob;
};

function loadBlob(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.onerror = reject
    xhr.send();
  });
}
