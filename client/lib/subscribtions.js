if (Meteor.isClient) {

     Meteor.subscribe("userData");
     Meteor.subscribe("typing")
     Meteor.subscribe("messeges");
     Meteor.subscribe("rooms");
}
