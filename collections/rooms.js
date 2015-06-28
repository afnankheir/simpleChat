rooms= new Mongo.Collection("rooms");
Meteor.methods({
  addRoom: function (name,names){
        rooms.insert({
            roomName: name,
            createdby: Meteor.userId(),
            admin: Meteor.user().username,
            particepents:names
        });

  }
});
