var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get: ');
      models.messages.get(function(result) {
        res.send(result);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(result) {
        // if(error) {
        //   throw error;
        // }
        res.send(result);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      console.log('🤘🤘🤘🤘🤘🤘 controller get');

      // models.users.get(req, res);
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body, function(result) {
        // console.log(error);
        // console.log('RESULTS: ',result);
        // if (error) {
        //   throw error;
        // }
        res.send(result);
      });
    }
  }
};
