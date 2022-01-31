import { TestHandler } from './handler';
import { Router } from 'express'

const testRouter = Router()
const testHandler = new TestHandler()

// get
testRouter.get('/', testHandler.testGet);

export {
  testRouter
}