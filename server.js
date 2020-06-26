const express = require('express');
const liquid = require('liquidjs');
const path = require('path');

const homeRouter = require('./routes/home');
const linkOneRouter = require('./routes/link-1');
const linkTwoRouter = require('./routes/link-2');

const app = express();

app.engine('liquid', new liquid.Liquid().express()); 
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'liquid');

app.use(express.static(path.resolve(__dirname + '/public')));

app.use('/', homeRouter);
app.use('/link-1', linkOneRouter);
app.use('/link-2', linkTwoRouter);

app.get('*', function(req, res){
  res.render('index.liquid', {
    page: '404'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening in port ${process.env.PORT}`);
});