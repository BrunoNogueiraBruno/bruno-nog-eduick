// Referência da estrutura básica do projeto: https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/

const express = require('express')
const next = require('next')
const getClasses = require('./models/getClasses')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/get-classes', (_req, res) => getClasses(res))
    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Listening port ${port}`)
    })
  })
  .catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })