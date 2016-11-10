exports.fetch = function(load) {
  return loadBlob(load.address).then(blobToBase64);
};

exports.instantiate = function(load) {
  return load.source;
};

function loadBlob(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(xhr.response);
      }
    };
    xhr.onerror = reject
    xhr.send();
  });
}

function blobToBase64(blob) {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}
