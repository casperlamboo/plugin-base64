exports.fetch = function(load) {
  return fetch(load.address).then(function(response) {
    return response.blob();
  }).then(function(blob) {
    load.metadata.blob = blob;

    return '';
  });
};

exports.instantiate = function(load) {
  return load.metadata.blob;
};
