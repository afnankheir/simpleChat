if(Meteor.isServer)
{   
  Meteor.publish("Rooms", function() {
  return Rooms.find({});
  });
}
