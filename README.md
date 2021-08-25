# [find-one-record](https://github.com/ryanburnette/find-one-record)

Express middleware factory for finding one record with Sequelize and attaching
it as an attribute of `req`, or returning 404 if not found.

## Installation

```bash
npm install @ryanburnette/find-one-record
```

## Usage

Use it in an Express + Sequelize app.

```js
var findOneRecordMiddlewareFactory = require('@ryanburnette/find-one-record');
var findOneWidget = findOneRecordMiddlewareFactory({
  pkName: 'id',
  model: db.Widget
});
app.get('/api/widgets/:id', findOneWidget, function (req, res) {
  res.json(req.record);
});
```

## Behavior

The primary key is expected to be `req.body[pkName]`. If a record isn't found a
404 is returned and the middleware chain is broken. The found record is
`req.record`.

## Options

- `pkName` primary key attribute name, defaults to `id`
- `model` required, pass in the Sequelize model
