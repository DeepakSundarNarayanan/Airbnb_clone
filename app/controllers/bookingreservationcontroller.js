import * as bookingreservationservices from '../services/bookingreservationservices.js';
import { setResponse, setErrorResponse } from './responsehandler.js';

// Retrieve booking reservations
export const find = async (request, response) => {
    try {
        const params = {...request.query};
        const bookingreservation = await bookingreservationservices.search(params);
        response.status(200)
        .json(bookingreservation);
    } catch (err) {
         response.status(500)
              .json ({
                  code: "ServiceError",
                  message: "Error occured while processing your request."
              })
    }
}
// Create a new booking reservation
export const post = async (request, response) =>
{
     try {
       const newbooking = {...request.body};
       const booking = await bookingreservationservices.save(newbooking);
       setResponse(booking, response);
     } 
     catch(err)
     {
       setErrorResponse(err, response);
     }
}
// Retrieve a specific booking reservation by ID
export const get = async (request, response)=> {
 try{
   const id = request.params.id;
   const booking = await bookingreservationservices.give(id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}
// Update a booking reservation by ID
export const put = async (request, response)=> {
 try{
   const id = request.params.id;
   const updatedbooking = {...request.body};
   const booking = await bookingreservationservices.update(updatedbooking, id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}
// Remove a booking reservation by ID
export const remove = async (request, response)=> {
 try{
   const id = request.params.id;
   const booking = await bookingreservationservices.remove(id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}



