// Connection Mongoose
const mongoose = require('mongoose');

// Pass url for the DB with defalt port and callback function
mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

// Request statement
require('./employee.model');