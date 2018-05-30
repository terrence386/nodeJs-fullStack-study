const express = require('express') 
const static = require('express-static') 
const bodyPaser = require('body-parser') 
const mysql  = require('mysql') 
const cookiePaser = require('cookie-parser') 
const cookieSession = require('cookie-session') 
const consolidate = require('consolidate') 
const expressRoute = require('express-route') 
const multer = require('multer') 
const multerObj = multer({dest: './static/upload'})

var server  = express()

server.listen(8098)


server.use(multerObj.any())

server.use(cookiePaser())
let keys = [];
  for(let i=0;i<100000;i++){
    keys[i] = 'a_'+Math.random()
  }
server.use(cookieSession({
  name:'sess_id',
  keys:keys,
  maxAge:20*60*1000
}))

server.engine('html',consolidate.ejs)
server.set('views','template')
server.set('view engine','html')

// route
server.use('/',require('./route/web.js')())
server.use('/admin',require('./route/admin.js')())

 

// default static

server.use(static('./static/'))