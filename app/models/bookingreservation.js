import mongoose from 'mongoose';
// Define Mongoose schema for booking reservations
const Schema = mongoose.Schema;
const BookingreservationSchema = new Schema({
    stay_id: {
       type: String,
       required: true
    },
    price: {
        type: String,
        required: true
    },
    days: {
            type: String,
            required: true
    }
},
{
    versionKey:  false
});
// Create Mongoose model based on the schema
const BRModel = mongoose.model('bookingresveration', BookingreservationSchema);
export default BRModel;