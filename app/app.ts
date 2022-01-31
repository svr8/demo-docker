import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import { router } from '../routes/index'

const PORT_LIST = [
  3000,
];

const run_server = (PORT: number) => {
  // initialise server
  const app = express()

  // middlewares 
  app.use(bodyParser.urlencoded({ extended: false })) // accept json payload
  app.use(bodyParser.json()) // accept json payload
  app.use(cors({
      credentials: true, 
      origin: [
          'http://localhost',
          'http://127.0.0.1',
      ]
  })); // allow CORS

  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  })
}

PORT_LIST.map(PORT => {
  run_server(PORT);
})


