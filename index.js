var path = require('path')
var express = require('express')
var app = express()
var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views')) //设置存放模板文件的目录
app.set('view engine', 'ejs') //设置模板引擎为ejs
/*app.get('/', function(req, res){
	res.send('Hello Stay')
})

app.get('/users/:name', function(req, res){
	res.send('Hello '+req.params.name)
})
*/

app.use('/', indexRouter)
// app.use('/users', usersRouter)


let port = 8300
app.listen(port, function(){
	console.log('server running '+port)
})