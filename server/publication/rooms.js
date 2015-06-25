if(Meteor.isServer){   
Meteor.publish("rooms", function() {
    return rooms.find({});
   });
}
