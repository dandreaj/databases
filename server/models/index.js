var db = require('../db');

db.connect(function(err) {
  if(err) {
    console.log(err);
  }
  console.log("Connected!");
});

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (request) {
      console.log('model post',request);
      // db.query('INSERT INTO messages', function(error,result) {
      //   if (err) {
      //     console.log('error',error);
      //   }
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users',function(error,results){

        if(error) console.log(error);

        callback(error, results);

      })
    },
    post: function (request, callback) {
      console.log(request);
      //Insert username into the database
      //if no error, run callback and pass in results
    }
  }
};
