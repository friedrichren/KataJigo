const path = require('path')
const {version} = require('../package.json')

function printSetOutputs(outputs) {
  for (let [name, value] of Object.entries(outputs)) {
    console.log(`::set-output name=${name}::${value}`)
  }
}

printSetOutputs({
  version,
  tag: (process.env.GITHUB_REF || '').replace('refs/tags/', ''),
  ci: path.resolve(process.cwd(), './ci')
})
