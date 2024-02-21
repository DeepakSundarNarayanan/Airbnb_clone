import Property from '../models/property.js';
// search with different(multiple) parameters
// these methods are called from the controller
export const search = async (params ={}) => {
    const properties = await Property.find(params).exec();
    return properties;
}
// search with a particular id
export const searchSpecificProperty = async (id = {}) => {
    const property = await Property.findById(id).exec();
    return property;
}
// saving a property
export const save = async (newProperty) => {
    const property = new  Property(newProperty);
    return property.save();
}
// updating a property
export const update = async (updatedProperty,id) => {
    const property = await Property.findByIdAndUpdate(id,updatedProperty).exec();
    return property;
}
//  deleting a property 
export const remove  = async (id) => {
 return await Property.findByIdAndDelete(id).exec();
}