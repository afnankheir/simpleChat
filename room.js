rooms= new Mongo.Collection("rooms");

if(Meteor.isClient)
{

var particepents =[];

Template.rooms.helpers({
	  rooms: function(){
		     return rooms.find({particepents: Meteor.user().username});}
       });

Template.newRoom.events({
   "click #submit": function (event, template) {
	    console.log("event trigered", $('#roomName').val());
		var room = $('#roomName').val();
                particepents.push(Meteor.user().username);
		 console.log(room);
     Meteor.call ('addRoom', room);

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
	      Session.set("roomId",roomId);
	      return false;
	     }

	 } );
}
Meteor.methods ({
addRoom: function (name){
      rooms.insert({
          roomName: name,
          createdby: Meteor.userId(),
          admin: Meteor.user().username,
          particepents:particepents

      });
      console.log (particepents);

}});
