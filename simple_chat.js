messeges=new Mongo.Collection("messeges");
// simple-todos.js

  if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    msgs: function () {
     
     return messeges.find({});
    }
  });

  Template.body.events({
  "submit .new-msg": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    messeges.insert({
      text: text,
      createdAt: new Date(),
        owner: Meteor.userId(),           // _id of logged in user
  username: Meteor.user().username  // username of logged in user

    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

}