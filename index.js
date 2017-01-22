var express = require('express');
var bodyParser = require('body-parser');

var favicon = require('serve-favicon');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var session = require('express-session');




//路由控制
var guzhidui = require('./routes/guzhidui');        //故纸堆网模块
var api = require('./routes/api');      //api接口

morgan.token('date',function(){return new Date().toLocaleString();});


var app = express();
app.set('port', 3010);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        // maxAge:1000*60*10 //过期时间设置(单位毫秒)
    }
}));

app.use('/static', express.static('public')); //指定静态文件夹
app.use(favicon('public/img/favicon.ico'));
app.use(morgan('log: :remote-addr [:date[iso]] :status (:response-time ms) :method :url')); //输出日志

app.use('/index', guzhidui);
app.use('/api', api);

app.get('/', function(req, res) {
    res.redirect('/index');
});

app.use(function(req, res) {
    res.status(404);
    res.send('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port') + ';press Ctrl-c to terminate.');
});