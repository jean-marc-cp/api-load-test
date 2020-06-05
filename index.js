'use strict';

const EasyGraphQLLoadTester = require('easygraphql-load-tester')
const fs = require('fs')
const path = require('path')

const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')

const args = {
  getSettings: {
    OrganisationName: 'anon'
  }
}

const loadTester = new EasyGraphQLLoadTester(schema, args)

const selectedQueries = ['getSettings'];

const testCases = loadTester.artillery({
  selectedQueries,
  onlyCustomQueries: false,
  queryFile: false,
  withMutations: true,
})

module.exports = {
  testCases
}
