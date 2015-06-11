// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    msgs: [
      { text: "This is message 1" },
      { text: "This is message 2" },
      { text: "This is messages 3" }
    ]
  });
}
