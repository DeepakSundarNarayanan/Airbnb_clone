import propertyRouter from './wishlist-route.js';

export default (app) => {
    app.use('/propertys', propertyRouter);
}

