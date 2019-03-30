const token = require("../lib/token")

module.exports = (Model) => (req, res, next, ) => {
    console.log('----------------------');
    console.log("Find: ", req.body);
    console.log('----------------------');
    Model.find(req.body)
      .then(data => res.json({ token: token.generate(data) }))
      .catch(err => {
        console.log("ERRO: ", err);
        return next(err);
      });
};