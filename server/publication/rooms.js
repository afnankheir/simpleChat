
Meteor.publish("rooms", function() {
    return rooms.find({});
   });

