// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // For loop
    for (var key in data) {
      MessagesView.$chats.append(`<p class="username">${data[key].username} :</p>`);
      $('.username').on('click', Friends.toggle(data[key].username));
      $('.username').css('font-weight', 'Bold');
      MessagesView.renderMessage(data[key].text);
    }
  },

  renderMessage: function(text) {
    // TODO: Render a single message.
    MessagesView.$chats.append(`<p class="message">${text}</p>`);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};