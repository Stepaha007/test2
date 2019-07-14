const
express = require('express'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res)=>{
  res.render('index.ejs')
})

app.get('/info', (req, res)=>{
  res.render('info.ejs')
})

app.get('/tos', (req, res)=>{
  res.render('tos.ejs')
})

app.get('*', (req, res)=>{
  res.render('404.ejs')
})

app.listen(3000, () => console.log(`App running on port ${3000}`));