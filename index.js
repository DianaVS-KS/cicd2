const express = require("express");
const app = express();
const path = require('path');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const notesRoutes = require('./notesRoutes');
app.use('/', notesRoutes);

app.listen(app.get('port'), () => {
 console.log("Connected on port", app.get('port'));
});