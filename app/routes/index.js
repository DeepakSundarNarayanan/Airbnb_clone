import propertyRouter from './property-routes.js'
import router  from './bookingreservationroutes.js';
export default (app) => {
    app.use('/booking', router),
    app.use('/property', propertyRouter);
}