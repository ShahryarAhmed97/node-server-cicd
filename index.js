const hydro = require("test-hydro-sdk")
var express = require('express');
var app = express();
var cors = require("cors")
// const hydro = require('test-hydro-sdk')
app.use(cors())
app.use(express.json());
// console.log("hydro",hydro.verifyToken({data:""}))
app.get('/', function (req, res) {
  res.send("Hello World");
});

app.post("/sendTokenToSipServer",async (req, res) => {

    // let hydrosdk =  verifyToken({ app_secert: req.body.token.app_secert, token: req.body.token.token })
    console.log("body====>", req.body)
    try{

      let res1= await hydro.verifyToken(req.body)
      console.log("res====>\\\\",res1.data)
      res.status(200).send("successfully send!")
    }
    catch(e){
      console.log("errrr=>",e)
    }
      
    
 

})


app.listen(8080)

console.log('server running at port ', 8080)

