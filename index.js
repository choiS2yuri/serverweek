// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res)=> {
  res.send('Hello World')
})
app.get('/user/:id', (req, res)=> {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    res.json({'userid': q.name})
  
})
app.get('/sound/:name', (req, res) =>{
    const { name } = req.params
    console.log(name)
    if(name == "dog"){
        res.json({'sound':'멍멍'})
    }else if(name == "pig"){
        res.json({'sound':'꿀꿀'})
    }else if(name == "cat"){
        res.json({'sound':'야옹'})
    }else{
        res.json({'sound':'알수없음'})
    }
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})