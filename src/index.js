#!/usr/bin/env babel-node

import properties from 'properties'
import Promise from 'bluebird'
import yaml from 'yamljs'
import fs from 'mz/fs'

Promise.promisifyAll(properties)

properties.parseAsync('application.properties', { path: true, namespaces: true })
  .then(o => yaml.stringify(o, Number.MAX_SAFE_INTEGER, 2))
  .then(o => fs.writeFile('application.yaml', o))
