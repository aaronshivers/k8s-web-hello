import express from 'express';
import os from 'os';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const message = `Hello from ${os.hostname()}!`
  res.send(message)
  console.log(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
