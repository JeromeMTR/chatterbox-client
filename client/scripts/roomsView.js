// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //RoomsView.render(Rooms._data);

    // RoomsView.$select.on('click', RoomsView.renderRoom($('select option:selected').text()));

    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);

    //RoomsView.$select.on('click', RoomsView.handleChange);
    //RoomsView.render();
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    //console.log(Rooms._data);
    for (var key in Rooms._data) {
      RoomsView.$select.append(`<option>${Rooms._data[key]}</option>`);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // clear all messages
    // render all messages in that room
    RoomsView.$select.append(`<option>${roomname}</option>`);
    // for (var key in Rooms._data[roomname]) {
    //   RoomsView.$select.append(`<option>${Rooms._data[key]}</option>`);
    // }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    //Get Input of
    // clear all messages
    $('#chats').text('');
    // render out specific rooms with specific messages

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // var input = .val();
    // get value in input message
    $('#chats').text('');
    var roomText = $('#message').val();
    // add it to the list of rooms
    RoomsView.renderRoom(roomText);
    Rooms.add(roomText);
  }

};
