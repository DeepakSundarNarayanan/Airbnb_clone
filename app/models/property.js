import { Decimal128 } from 'bson';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// It is just a schema and the mongo db doesn't know what is mentioned in this schema
const PropertySchema = new Schema({

    propertyId: {
        type : Number,
        required : true
    },
    propertyTitle: {
        type : String,
        required : true
    },
    propertyDescription: {
        type : String,
        required : true
    },
    propertyLocation: {
        type : String,
        required : true
    },
    pricePerNight: {
        type: Decimal128,
        required : true
    }
    
},
{
    versionKey: false
});

const PropertyModel = mongoose.model('property',PropertySchema);

export default PropertyModel;