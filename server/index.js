const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes())


const port = 3000;
const host = 'localhost'
app.listen(port, host, () => {
    console.log('App corriendo en el puerto 3000');

});



 