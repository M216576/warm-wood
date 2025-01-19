const { Console } = require('console')
const express = require('express')
const { resolve } = require('url')
const App = express ()
App .use(express.json)

let users =[
    {id:1, name: 'morris',email: 'morris@example.com'},
    {id:1, name: 'murimi',email: 'murrimi@example.com'}
]

App.get('/api/user/:id',(req,res)=> {
    const user = users.find(u => u.id ===parseInt(req.path))
     if (!user) {
        return res.status(404).json({message:'user not found'})
            res.json(user)

     }
     res.json(user)

})

App.listen(3000,() =>{
    Console.log('server running on port 3000')
})