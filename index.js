const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const allowCrossDomain = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'example.com');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//
//     next();
// }

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
//app.use(allowCrossDomain)

require('./routes/ideasRoutes')(app);
require('./routes/categoriesRoutes')(app);
require('./routes/membersRoutes')(app);
require('./routes/commentsRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
