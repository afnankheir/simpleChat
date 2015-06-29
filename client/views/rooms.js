particepents =[];
Template.rooms.helpers({
	rooms: function(){
    	return rooms.find({particepents: Meteor.user().username});
	}});
Template.rooms.events({
	"submit .roomId": function (event){
	    var roomId = event.target.room_id.value;
	    Session.set('roomId',roomId);        
	    return false;
	 }
});