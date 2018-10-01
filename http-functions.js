var https = require('https')

module.exports = function getHTML (options, callback) {

  /* Add your code here */
    https.get(options, function(response){
      var result = ''

      response.on('data', function(data) {
        result += data
      })

      response.on('end', function() {
        callback(result)
      })
    })
};