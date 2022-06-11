// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  roomList: function(data) {
    for (let i = 0; i < data.length; i++) {
      if (Rooms._data[data[i].roomname] === undefined) {
        Rooms._data[data[i].roomname] = data[i].roomname;
      }
      if (Rooms._data[data[i].roomname] === null || Rooms._data[data[i].roomname].trim().length === 0) {
        Rooms._data['lobby'] = 'lobby';
      }
    }
  },

  // updateList: function() {
  //   for (let i = 0; i < Rooms._data.length; i++) {
  //     $('#rooms select').append(`<p>${Rooms._data[i]}</p>`);
  //   }
  // },

  add: function(newRoom) {
    Rooms._data[newRoom] = newRoom;
  }
};