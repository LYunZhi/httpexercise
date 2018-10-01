var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverseCase (html) {
  console.log(html.split(' ').reverse().join(' '))
  /* Write your code here! */

}

getHTML(requestOptions, printReverseCase);