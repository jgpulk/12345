const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');

const app = express()


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  res.render("home")
})

app.post("/",function(req,res){
  console.log(req.body.num1);
})


app.listen(3000,function (){
  console.log("Started server at port 3000");
});
