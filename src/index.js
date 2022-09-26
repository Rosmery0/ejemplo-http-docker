const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.query());

// routes
app.use('/temps/api', require('./routes/index.js'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});