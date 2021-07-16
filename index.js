'use strict';

function findOneRecordMiddlewareFactory(options) {
  if (!options.pkName) {
    options.pkName = 'id';
  }
  if (!options.model) {
    throw new Error('options.model is required');
  }
  var model = options.model;
  var pkName = options.pkName;
  return function findOneRecordMiddleware(req, res, next) {
    var pk = req.params[pkName] || req.body[pkName];
    var where = {};
    where[pkName] = pk;
    model.findOne({ where: where }).then(function (record) {
      if (!record) {
        res.statusCode = 404;
        res.end();
        return;
      }
      req.record = record;
      next();
    });
  };
}

module.exports = findOneRecordMiddlewareFactory;
