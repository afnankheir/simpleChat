rooms= new Mongo.Collection("rooms");
if(Meteor.isClient)
{
var particepents =[];

Template.rooms.helpers({
	  rooms: function(){
		     return rooms.find({particepents: Meteor.user().username});
		    }
	  /*roomCheck: function(){
		       user=Meteor.user().username;
		       Session.set('room_id',$('.room').val());
                       particepantsIndex = rooms.find({Session.get('room_id')}).particepents;
		       if( particepantsIndex.indexOf(user) == -1)
	                  return false;
			    
			else
			   return true;
			}*/
		  });


Template.newRoom.events({
   "click #submit": function (event, template) {
	    console.log("event trigered", $('#roomName').val());
		var room = $('#roomName').val();
                particepents.push(Meteor.user().username);
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
      }
     
  } );

Template.rooms.events({
	"submit .roomId": function (event){
	      var roomId = event.target.room_id.value;
	      Session.set('roomId',roomId);
	      console.log("aaa");
	      return false;
	     }

	 } );
}

