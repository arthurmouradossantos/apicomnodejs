const express = require('express');
const app = express();
const port = 3022
app.use(express.json());

require('./src/Routes/index')(app);


app.listen(port);