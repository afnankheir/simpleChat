if( Meteor.isServer){
  Meteor.publish("UserData", function () {
  return Meteor.users.find({});
});
}
