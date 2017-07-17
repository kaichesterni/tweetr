"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.insertOne(newTweet);
      callback(null, true);
    },

    getTweets: function(callback) {
      db.find().toArray((err, db) => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.sort(sortNewestFirst));
      });
    }

  };
};
