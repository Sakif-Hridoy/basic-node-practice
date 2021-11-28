const express = require('express');

const app = express();

/*Arrow function in very short form and updated */
// const rootCall = (req,res) => res.send('Thank you very much');
/*Arrow function in very short form and updated */


/*Arrow function declaration*/
// const rootCall = (req,res)=>{
//     res.send('Thank you very much')
// }
/*Arrow function declaration*/



/*simple function declaration*/
// function rootCall(req,res){
//     res.send('Thank you SO much')
// }
/*simple function declaration*/

/* This is professional declaration to handle requests with a function */
app.get('/',(req,res)=>{
    res.send('Thank you for calling me')
})

app.listen(3000,()=> console.log('Listening To 3000'));