const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const path = require('path')


// data parsing
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join('public')));



//Server begins to listen
app.listen(PORT, () => {
  console.log(`App listening on PORT`+ PORT);
});


