# [find-one-record](https://github.com/ryanburnette/find-one-record)

Express middleware factory for finding one record with Sequelize and attaching
it as an attribute of `req`, or returning 404 if not found.

## Installation

```bash
npm install ryanburnette/find-one-record
```

## Usage

Use it in an Express + Sequelize app.

```js
var findOneRecordMiddlwareFactory = require('@ryanburnette/find-one-record');
var findOneWidget = findOneRecordMiddlewareFactory({ pkName: 'id', db.Widget });
app.get('/api/widgets/:id', findOneWidget, function (req,res) {
  res.json(req.record);
})
```

## Options

- `pkName` primary key attribute name, defaults to `id`
- `model` required, pass in the Sequelize model instance
