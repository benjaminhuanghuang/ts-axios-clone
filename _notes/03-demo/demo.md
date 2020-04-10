## Dependencies
```
  "webpack": "^4.38.0",
  "webpack-dev-middleware": "^3.7.0",
  "webpack-hot-middleware": "^2.25.0"
  "ts-loader": "^6.0.4",
  "tslint-loader": "^3.5.4",
  "express": "^4.17.1",
  "body-parser": "^1.19.0",
```


## Webpack


## Folder structure


## First sample
```
import axios from "../../src/index";

axios({
  method: "get",
  url: "/simple/get",
  params: {
    a:1,
    b:1
  }
});
```

## First Server
```
  const express = require('express')
  const bodyParser = require('body-parser')

  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  const router = express.Router()

  app.use(router)

  const port = process.env.PORT || 8071

  module.exports = app.listen(port, () => {
    console.log('Server listening on http://localhost:' + port + ', Ctrl + C to stop.')
  })

```

## Start the server
```
  "dev": "node examples/server.js",
  
  npm run dev
```