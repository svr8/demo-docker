export class TestHandler {
  testGet(req: any, res: any) {
    const msg = 'Hello World';
    const logMsg = `GET: ${req.socket.localPort}`;
    console.log(logMsg);
    res.status(200).send({msg, logMsg})
  }
}