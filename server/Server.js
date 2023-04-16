//All Require;
require('./src/Connection/Connection');
const user = require('./src/Controller/User_Controller');
const express = require('express')
const cors = require('cors');
const App = express();

//Middleware;
App.use(express.json());
App.use(cors({ origin: "*"}));


//Routers;
App.use('/',user);


//Port Listing;
const PORT =process.env.PORT || 9000;
App.listen(PORT, () => {
    console.log('Port Running On' + ' ' +PORT);
});

