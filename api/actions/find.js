module.exports = (Model) => ( req, res, next, query = {} ) => {
    console.log('----------------------');
    console.log('Find: ', query);
    console.log('----------------------');
    let page = Number(req.params.page) || 1

    Model.find(query)
        .skip(page - 1)
        .limit(5)
        .then((data) => res.json(data))
        .catch((err) => {
            console.log('ERRO: ', err);
            return next(err);
        });
};