const User = require("../models/userModel")
async function createUser(userData){
    try {
        const newUser = await User.create(userData);
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
      }
}

async function findOneUser(email){
  try {
      const newUser = await User.findOne({email});
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

async function findUserByID(id){
  try {
      const user = await User.findById(id)
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

async function GetAllUSers(){
  try {
      const users = await User.find()
      return users;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

async function DeleteUser(id){
  try {
      const users = await User.findByIdAndDelete(id)
      return users;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

async function UpdateUser(id,userData){
  try {
      const user = await User.findByIdAndUpdate(id,userData,{new:true})//returning new document after updaating
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

module.exports = {createUser,findOneUser,findUserByID,GetAllUSers,DeleteUser,UpdateUser}