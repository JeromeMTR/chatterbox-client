// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function(data) {
    for (let i = 0; i < data.length; i++) {
      Rooms._data[data[i].roomname] = data[i].roomname;
    }
  },

  updateRoom: function(room) {
    Rooms._data[room] = room;
  },

  selectRoom: function() {

  }
};