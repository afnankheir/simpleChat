rooms= new Mongo.Collection("rooms");
if(Meteor.isClient)
{
var particepents =[];

Template.rooms.helpers({
  rooms: function(){
    return rooms.find();
    }
  });

Template.newRoom.events({
   "click #submit": function (event, template) {
	    console.log("event trigered", $('#roomName').val());
		var room = $('#roomName').val();

		 console.log(room);
		  rooms.insert({
			    roomName: room,
			    createdby: Meteor.userId(),
			    admin: Meteor.user().username,
			    particepents:particepents
		  });

       // $('#roomName').val() = "";
       // return false;
      },
   "click .toggle-checked": function (event) {
       var particepent = event.target.value;
       console.log(particepent);
        particepents.push(particepent);
      },
   "click .room": function (event){
      var roomId=$('#room_id').val();;
      Session.set('roomId',roomId);
      
      Console.log(Session.get('roomId'));
     }
     
  } );

}

