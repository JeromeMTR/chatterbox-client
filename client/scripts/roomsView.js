// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.render);
    RoomsView.$select.on('click', RoomsView.handleChange);
  }, // Room 1, 2, 3, [4]

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // Only show room 4

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    //Get Input of 4
    RoomsView.renderRoom($('select option:selected').text());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

  }

};
