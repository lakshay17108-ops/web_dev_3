import fs from 'fs'



function getData(){
    let data =  fs.readFileSync('./database/data.json', 'utf-8')
    data = JSON.parse(data)
    return data
} 



const createuser = function(req,res){
    let {name, email, password} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'Please provide name, email, and password',
        });
    }
    let data = getData();
    data.push({ name, email, password });
    fs.writeFileSync('./database/data.json', JSON.stringify(data));
    res.status(201).json({
        message: 'User created successfully',
        success: true,
    });
};



const getuser = (req,res)=>{
 
    let data =  getData();



    res.status(200).json({
        message:'data fetched successfully...',
        success:true,
        data:data
    })

}
const getuserById = (req,res)=>{
    let data =  getData();
    let id = req.params.id;
    let user = data.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }
    res.status(200).json({
        message: 'User fetched successfully',
        success: true,
        data: user
    });
}
// const createUser = (req,res)=>{
//     let data =  getData()
//     let newUser = req.body}

 
    

 

export  {getuser, createuser, getuserById} 