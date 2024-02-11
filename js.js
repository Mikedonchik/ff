import {express} from 'express'
import 'dotenv/config'
import { Router } from 'express'
import { products } from '../db.js'
import { bodyParser } from 'body-parser'
const app = express()
app.use('./api', router)
app.use(express.json())
const port = process.env.port || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})