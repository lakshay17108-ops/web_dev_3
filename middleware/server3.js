const port = 3000;
app.use(morgan('dev'));
function logger(req, res, next) {  
    comnsole.log(req.method, req.url);
   
  }
  app.get('/users', logger,middleware, (req, res) => {})
  app.get('/about', (req, res) => {
    console.log('About page accessed');
    res.send('This is the about page');
  } )
