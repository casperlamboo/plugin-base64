// load image using blob plugin
import imageBlob from './doodle3d.png!blob';

const imageSource = URL.createObjectURL(imageBlob);

document.write(`<img src="${imageSource}" />`);
