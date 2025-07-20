const express = require (`express`)
const cors = require (`cors`)
const mongoose = require(`mongoose`)
const user_table = require(`./user_schema`)

const app = express ();
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb://localhost:27017/user_detail`)

app.post(`/userdetail`,(req , res)=>
    {
 const{ name, email, address} = req.body;
 const store = user_table.create({name, email, address})
 if(store)
    {
       res.status(200).send(`Data Stored Successfully`);
    }
    else
    {
        res.status(500).send(`Error While The Storing Data`);
    }

});

app.listen(3000 , ()=>{
    console.log(`App is running on 3000`);
    
});

