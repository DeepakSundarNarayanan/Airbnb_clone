const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const { validationResult } = require('express-validator');
const userService = require("../services/userService")
async function RegisterUser(request, response){
    const {username, email, password} = request.body
    console.log(request.body)
    try{
        const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
        const user = await userService.findOneUser(email)
        if (user){
            return response.status(400).json({message: "user already exist"})  
        }
        const createdUser = await userService.createUser({username, email, password})
        return response.status(201).json({message: "user created successfully",user:createdUser})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

//get is below
async function GetAllUsers(request, response){
    
    
    try{
        const users = await userService.GetAllUSers()
        return response.status(200).json({users})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

//get specific(for particular id it returns the value) is below
async function GetSingleUser(request, response){
    
    try{
        const {id} = request.params
        console.log(id)
        const user = await userService.findUserByID(id)
        return response.status(200).json({user})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

//PATCH update user
async function UpdateUser(request, response){
    
    try{
        const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }const {id} = request.params
        const user = await userService.UpdateUser(id,request.body)
        if (!user){
            return response.status(400).json({message: "user not found"})  
        }
        if(request.body.password){
            request.body.password = await bcryptjs.hash(request.body.password,10)
        }
        const updateduser = await User.findByIdAndUpdate(id,{...request.body},{new:true})
        

        return response.status(200).json({user:updateduser})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

//delete
async function DeleteUser(request, response){
    
    try{
        const {id} = request.params
        console.log(id)
        await userService.DeleteUser(id)
        return response.status(200).json({message:"user deleted successfully"})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

module.exports = {RegisterUser,GetAllUsers,GetSingleUser,UpdateUser,DeleteUser}