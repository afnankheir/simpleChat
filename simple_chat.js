messeges=new Mongo.Collection("messeges");  
 
  if (Meteor.isClient) {
    
     Meteor.subscribe("userData");
     Meteor.subscribe("messeges");

  // This code only runs on the client
  Template.registerHelper('formatDate', function(date) {
  return moment(date).startOf('hour').fromNow();

});

  Template.body.helpers({

    msgs: function () {
     
     return messeges.find({});
    },

    chatUsers: function (){
    //return userData.find({});

  return Meteor.users.find({});
}
  });

  Template.body.events({
  "submit .new-msg": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;
    var date = new Date();

    messeges.insert({
      text: text,
      createdAt: date,
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
if (Meteor.isServer){
   Meteor.publish("messeges",function(){
     return messeges.find();
   }
   );
Meteor.publish("userData", function () {
 
   return Meteor.users.find({});
});

  }
