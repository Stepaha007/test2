const
express = require('express'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
path = require('path');
var app = express(),
server = require('http').createServer(app);
  

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res)=>{
  res.render('/views/index.ejs')
})

app.get('/info', (req, res)=>{
  res.render('/views/info.ejs')
})

app.get('/tos', (req, res)=>{
  res.render('/views/tos.ejs')
})


server.listen(3000, "127.0.0.1");