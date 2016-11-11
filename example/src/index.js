// load image using base64 plugin
import imageBlob from './doodle3d.png!base64';

const imageSource = URL.createObjectURL(imageBlob);

document.write(`<img src="${imageSource}" />`);
