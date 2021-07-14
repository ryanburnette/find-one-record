'use strict';

function findOneRecordMiddlewareFactory(options) {
  if (!options.pkName) {
    options.pkName = 'id';
  }
  if (!options.model) {
    throw new Error('options.model is required');
  }
  var { model, pkName } = options;
  return async function findOneRecordMiddleware(req, res, next) {
    var pk = req.params[pkName] || req.body[pkName];
    var where = {};
    where[pkName] = pk;
    req.record = await model.findOne({ where });
    if (!req.record) {
      res.statusCode = 404;
      res.end();
      return;
    }
    next();
  };
}

module.exports = findOneRecordMiddlewareFactory;
