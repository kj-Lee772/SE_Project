var db = require('./db');
var template = require('./template.js');
var url = require('url');
var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');

exports.search_process = function(request, response){
  var post = qs.parse(body);
        db.query('SELECT * FROM database where name==$1',[post.name], function(error, topics){
          var title = '검색결과';
          var list = template.list(topics);
          response.writeHead(200);
          response.end(html);
        });
}
