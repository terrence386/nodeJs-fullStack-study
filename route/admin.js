const express = require('express')

module.exports = function() {
  var router = express.Router()


  // 检查登录状态 session
  router.use((req,res,next) =>{
    if(!req.session['admin_id'] && req.url!='/login'){ // 没有登录 redirect
      res.redirect('/admin/login')
    }else{
      next()
    }
  })


  router.get('/login',(req,res) => {
    res.render('admin/login.ejs',{})
  })


  return router
}