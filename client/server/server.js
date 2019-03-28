const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    console.log('yes');
})


app.listen(3000,()=> console.log('running at port 3000'));