var db = require('../db');

db.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Connected!");
});

module.exports = {
  messages: {
    get: function(callback) {
      db.query('SELECT * FROM messages', function(error, results) {
        console.log('results from get', results);
        if(error) {
          throw error;
        }
        callback(results);
      });
    }, // a function which produces all the messages
    post: function(request, callback) {
      var message = request;
      db.query('INSERT INTO messages SET ?', message, function(error, results) {
        if (error) {
          throw error;
        }
        callback(results);
      }); // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      db.query('SELECT * FROM users', function(error, results) {

        if (error) { console.log(error); }
        callback(error, results);
      });
    },

    post: function(request, callback) {
      var username = request;
      db.query('INSERT INTO users SET ?', username, function(error, results) {
        if (error) {
          throw error;
        }
        callback(results);
        //Insert username into the database
        //if no error, run callback and pass in results
      });
    }
  }
};


    // var post  = {id: 1, title: 'Hello MySQL'};
    // var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
    //   // Neat!
    // });
    // console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
