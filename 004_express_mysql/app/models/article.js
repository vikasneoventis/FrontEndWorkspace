// Example model

var db = require('orm').db;

var Article = db.define('article', {
    title: String,
    url: String,
    text: String
  }, {
    methods: {
      getUrl: function(){
        return this.url;
      }
    }
});

