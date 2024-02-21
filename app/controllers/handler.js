
export const setResponse = (data, response) => {
    response.status(200)
            .json(data);
}

export const setErrorResponse = (err, response) => {
    response.status(400)
             .json({
                code: "Invalid data",
                message: "Error occured while processing your data"
             });
    response.status(500)
            .json({
                code: "Service Error",
                message: "Error occured while processing your data"
            });
}