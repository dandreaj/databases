var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get: ');
      models.messages.get(req,res);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('🤘🤘🤘🤘🤘🤘',req);
      models.messages.post(req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      console.log('🤘🤘🤘🤘🤘🤘 controller get');

      // models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('controller post 🤘🤘🤘🤘🤘🤘 ',req.body);
      models.users.post(req.body.username, function(error, result) {
        console.log(error);
        console.log('RESULTS: ',result);
        if (error) {
          throw error;
        }
      });
    }
  }
};
