const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const song = require('./routes/song');
const artist = require('./routes/artist')
const user = require('./routes/user')
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');
const connectDB = require('./config/db')


dotenv.config({ path: './config/config.env' });

connectDB()

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

app.use(logger)
app.use(errorHandler)
app.use('/song', song);
app.use('/user', user);
app.use('/artist', artist)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})