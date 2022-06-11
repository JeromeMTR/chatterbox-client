// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function() {
    $('.username').on('click', Friends.toggle($('.username').text()));
  },

  toggle: function(user) {
    console.log('hi');
    if (Friends._data[user] === undefined) {
      Friends._data[user] = true;
    } else {
      delete Friends._data[user];
    }
  }
};