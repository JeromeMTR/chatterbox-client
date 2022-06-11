// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // For loop
    for (var key in data) {
      MessagesView.renderMessage(data[key].text);
    }
    //MessagesView.renderMessage(window.Messages.data['62806']);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    MessagesView.$chats.append(`<p>${message}</p>`);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};