import * as propertyServices from '../services/property-services.js';
import * as handlers from '../controllers/handler.js';

// called from the router
// Basically calls the services and sets the responses
export const find = async (request,response) => {
    try{
        const params = {...request.query};
        const properties = await propertyServices.search(params);
        handlers.setResponse(properties,response);
    }catch(err){
      handlers.setErrorResponse(err,response);
    }
}

export const post = async (request,response) => {
  try{
    const newProperty = {...request.body};
    const property = await propertyServices.save(newProperty);
    handlers.setResponse(property,response);
  }catch(err){
    handlers.setErrorResponse(err,response);
  }
}

export const get = async (request,response) => {
  try{
    const id = request.params.id;
    const property = await propertyServices.searchSpecificProperty(id);
    handlers.setResponse(property,response);

  }catch(err){
    handlers.setErrorResponse(err,response);

  }
}

export const put = async (request,response) => {
  try{
     const id = request.params.id;
     const updateProperty = {...request.body};
     const property = await propertyServices.update(updateProperty,id);
     handlers.setResponse(property,response);

  }catch(err){
    handlers.setErrorResponse(err,response);
  }
}


export const remove = async (request,response) => {
  try{
    const id = request.params.id;
    const property = await propertyServices.remove(id);
    handlers.setResponse({},response);
  }catch(err){
    handlers.setErrorResponse(err,response);
  }
}