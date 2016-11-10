# Plugin Base64
Base64 loader for [SystemJS](https://github.com/systemjs/systemjs)
# Usage
Install the plugin

```jspm install base64=github:casperlamboo/plugin-base64```

Load a file

```javascript
import image from './image.png!base64';

console.log(image);
```

#Run Example

Install

```npm install```

Go to example

```cd example/```

Start server (for instance `serve`). Or create production bundle

```npm run dist```

dist folder will be located in `example/dist`
