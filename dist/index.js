#!/usr/bin/env node
'use strict';

var _properties = require('properties');

var _properties2 = _interopRequireDefault(_properties);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.promisifyAll(_properties2.default);

_properties2.default.parseAsync('application.properties', { path: true, namespaces: true }).then(function (o) {
  return _yamljs2.default.stringify(o, Number.MAX_SAFE_INTEGER, 2);
}).then(function (o) {
  return _fs2.default.writeFile('application.yaml', o);
});