const express      = require('express');
const cookieParser = require('cookie-parser');
const fs           = require('fs');
const ejs          = require('ejs'); 
const app          = new express();
const bodyParser   = require('body-parser'); 
const http         = require('http');
const path         = require('path');
const contentTypes = require('./utils/content-types');
const sysInfo      = require('./utils/sys-info');
const env          = process.env;
const socketio     = require('socket.io');
const redis        = require('redis'); 
const sio_redis    = require('socket.io-redis'); 
const redisPW      = "";
const sub          = redis.createClient(18071, env.RedisEndpoint ,{ return_buffers: true});
const pub          = redis.createClient(18071, env.RedisEndpoint  ,{ return_buffers: true});
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//const theParse    = require('./parseHTML.js')(redis);




app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.enable('trust proxy');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');




app.get('/', (req, res) => {
  res.render('index', {
    hey: "Projects"
  });
});

app.get('/parse', (req, res) => {
  res.send("yo");
});
app.get('/health', (req, res) => {

  res.writeHead(200);
  res.end();
});
app.get(/\/info\/(gen|poll)/, (req,res) => {
    let url = req.url;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[url.slice(6)]()));
});

app.get('/', (req,res) => {
  res.render('start');
});


let server = app.listen(env.NODE_PORT || 8443, env.NODE_IP || 'localhost', () => {
  console.log(`Application worker ${process.pid} at  started...`);

}); 
const io = socketio(server);
var setAdapter = (() => {
  var num = 0;
  return function() {
    num += 1;
    console.log('num', num);
    if (num > 1) {
      io.adapter(sio_redis({
        pubClient: pub,
        subClient: sub
      }));
    }
  }
})();


sub.auth(redisPW , (err) => {
  if (err) {
    console.log(err)
  };
  setAdapter();
  
});
pub.auth(redisPW , (err) => {
  if (err) {
    console.log(err)
  };
  setAdapter();
});



io.on('connection', (socket) => {


  

});