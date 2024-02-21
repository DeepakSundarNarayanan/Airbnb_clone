import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const PropertySchema = new  Schema({
    property_id: {
        type: String,
        required: true
    },
    wishlist_id: {
        type: String,
        required: true
    },
    favorites: {
        type: String,
        required: true
    },
}
);

const PropertyModel = mongoose.model('property', PropertySchema);
export default PropertyModel;
