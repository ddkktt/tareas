const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const {engine} = require('express-handlebars')
dotenv.config();
const port = process.env.PORT || 3000;

const router = require('./src/routes');
const app = express();


app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views', './src/views')


app.use('/assets', express.static(path.join(__dirname, 'public')));



app.use(router);

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});