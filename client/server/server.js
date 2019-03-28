const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    console.log('yes');
})
app.use('/', (req, res) => {
    
})

app.listen(3000,()=> console.log('running at port 3000'));