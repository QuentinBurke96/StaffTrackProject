require('./models/db');

const express = require('express');
// requiring path allows you to interact with file paths easily, a core module in node
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require("handlebars");
const bodyparser = require('body-parser');

const {
    allowInsecurePrototypeAccess,
  } = require("@handlebars/allow-prototype-access");

const employeeController = require('./controllers/employeeController');

var app = express(); 

app.use(
    bodyparser.urlencoded({
      extended: true,
    })
  );

app.use(bodyparser.json());
// MIDDLEWARE
app.set('views', path.join(__dirname, '/views/'));
app.engine(
    'hbs',
    // Could not run without .engine
     exphbs.engine({
          extname: 'hbs',
          defaultLayout: 'mainLayout',
          layoutsDir: __dirname + '/views/layouts/', 
          handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
);

app.set('view engine', 'hbs');



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Express server started at port : " + PORT);
});

app.use('/employee', employeeController);