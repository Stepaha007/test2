const
express = require('express'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
path = require('path');
var app = express()
server = require('http').createServer(app)
  
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

app.get('*', (req, res)=>{
  res.render('/views/404.ejs')
})

server.listen(80, () => console.log(`App running on port ${80}`));