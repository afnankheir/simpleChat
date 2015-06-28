<<<<<<< HEAD

Meteor.publish("rooms", function() {
    return rooms.find({});
   });

=======
if(Meteor.isServer)
{   
  Meteor.publish("Rooms", function() {
  return Rooms.find({});
  });
}
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
