# Plugin Blob

Blob loader for [SystemJS](https://github.com/systemjs/systemjs)

# Usage

Install the plugin

```
jspm install blob=github:casperlamboo/plugin-blob
```

Load a file

```javascript
// load image using blob plugin
import imageBlob from './doodle3d.png!blob';

const imageSource = URL.createObjectURL(imageBlob);

document.write(`<img src="${imageSource}" />`);
```

#Run Example

Install

```npm install```

Go to example

```cd example/```

Start server (for instance `serve`). Or create production bundle

```npm run dist```

dist folder will be located in `example/dist`
