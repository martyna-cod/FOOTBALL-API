const express = require('express')
const db = require('./db')
const app = express()
const port = process.env.PORT || 4000;
const cors = require('cors')
const bodyParser = require('body-parser')
const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)


const ImageModel = require('./image/Image')
const imageRouter = require('./image/router')
app.use(imageRouter)


const authRouter = require("./auth/router");
app.use(authRouter);

const userRouter = require('./user/router')
app.use(userRouter)


//app.get('/', (req, res) => res.send("Good morning"))
app.listen(port, () => console.log(`Listening on port ${port}`))