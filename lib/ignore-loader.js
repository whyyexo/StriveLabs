// Webpack loader that returns an empty module
// Used to ignore files in the src directory
module.exports = function() {
  return 'module.exports = {};'
}

