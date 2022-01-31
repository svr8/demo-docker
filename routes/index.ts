import express = require('express')
import { testRouter } from './test'

const router = express.Router()

router.use('/', testRouter);

export {
  router
}
