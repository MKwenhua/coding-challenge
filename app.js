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
const Tokens       = require('csrf')
const tokens       = new Tokens();
global.Promise     = require("bluebird");
const urlencodedParser = bodyParser.urlencoded({ extended: false });





app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.enable('trust proxy');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');




app.get('/', (req, res) => {
 tokens.secret().then( (secret) => {
  res.render('index', {
    csrf: secret
  });
})

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

app.get('/authstuff/:crsf', (req, res) => {
  if (tokens.verify(req.param.crsf, tokens)) {
  res.writeHead(200);
 res.send(JSON.stringy({clientId: process.env.CLIENT_ID,
secret: process.env.GIT_PW}));
 res.end();
}else{

}
});


let server = app.listen(env.NODE_PORT || 8443, env.NODE_IP || 'localhost', () => {
  console.log(`Application worker ${process.pid} at  started...`);

}); 
