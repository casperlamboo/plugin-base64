# Plugin Blob
Blob loader for [SystemJS](https://github.com/systemjs/systemjs)
# Usage
Install the plugin

```jspm install blob=github:casperlamboo/plugin-blob```

Load a file

```javascript
import image from './image.png!blob';

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
