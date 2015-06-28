if (Meteor.isClient) {

     Meteor.subscribe("UserData");
     Meteor.subscribe("Typing")
     Meteor.subscribe("Messages");
     Meteor.subscribe("Rooms");
}
