<<<<<<< HEAD

Meteor.publish("userData", function () {
 
  return Meteor.users.find({});
  });
=======
if( Meteor.isServer){
  Meteor.publish("UserData", function () {
  return Meteor.users.find({});
});
}
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
