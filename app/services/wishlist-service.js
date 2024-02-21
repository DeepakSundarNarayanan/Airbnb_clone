import Property from '../models/wishlist.js';

export const search = async (params = {}) => {
    const properties = await Property.find(params).exec();
    return properties;
}

export const save = async (newProperty) => {
    const property = new Property(newProperty);
    return await property.save();
}

export const findById = async (id) => {
    const property = await Property.findById(id).exec();
    return property;
}

export const update = async (updatedProperty, id) => {
    const property = await Property.findByIdAndUpdate(id, updatedProperty, { new: true }).exec();
    return property;
}

export const remove = async (id) => {
    return await Property.findByIdAndDelete(id).exec();
}
