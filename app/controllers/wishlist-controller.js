import { response } from 'express';
import * as propertyService from '../services/wishlist-service.js';
import { setResponse, setErrorResponse } from './response-handler.js'


export const find =  async (request, response) => {
    try{
        const params = {...request.query};
        const propertys = await propertyService.search(params);
        setResponse(propertys, response);
    }catch (err) {
        setErrorResponse(err, response);
    }
}

export const post = async (request, response) => {
    try{
        const newProperty = {...request.body};
        const property = await propertyService.save(newProperty);
        setResponse(property, response);
    }catch (err) {
        setErrorResponse(err, response);
}
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const property = await propertyService.findById(id);
        setResponse(property, response);
        
    } catch (err) {
        setErrorResponse(err, response);
    }

}

export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedProperty = {...request.body};
        const property = await propertyService.update(updatedProperty, id);
        setResponse(property, response);
    } catch (err) {
        setErrorResponse(err, response);
    }

}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const property = await propertyService.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(err, response);
    }

}