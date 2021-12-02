const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const users = ["Sakif","Nasrin","Moin","Zaara","Marshmello"]
app.get('/',(req,res)=>{
    const fruit = {
        product:'Lemon',
        price:240
    }
    res.send(fruit)
});
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity:1000,price:10000})
});

app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    console.log(req.params.id)
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

app.post('/addUser'),(req,res)=>{
    console.log("post req send")
}

app.listen(4200,()=> console.log('Listening To 4200'));

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
