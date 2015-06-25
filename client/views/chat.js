if(Meteor.isClient)
{
Template.registerHelper('formatDate', function(date) {
      return moment(date).fromNow();
      });

    Template.body.helpers({

	      msgs: function () {
	       roomID=Session.get('roomId');
	       return messeges.find({roomId:roomID});
		},

	    nowtyping: function(){
	      currentUserName= Meteor.user().username;
	      return typing.find({ name: { $ne: currentUserName}});
	    }
	  });

    Template.newRoom.helpers({
      chatUsers: function (){
	   return Meteor.users.find({});
	  }
	}); 
    
    
    Template.rooms.helpers({
	  rooms: function(){
		     return rooms.find({particepents: Meteor.user().username});
		    }});

   Template.body.events({
       
     "focus .new-msg": function (event){
        usertyping = Meteor.user().username;
        Meteor.call ("addTyping", usertyping, function(error, id){
           Session.set("typeId",id);
        });
      },

     "blur .new-msg": function (event){
        Meteor.call("removeTyping", Session.get('typeId'));
      },
     "submit .new-msg": function (event) {
        Meteor.call("removeTyping", Session.get ('typeId'));
      var message = event.target.text.value;
      var getRoomId = Session.get('roomId');
      Meteor.call("addMessage", message,getRoomId, function(error){
        if(error) console.log(error);
      });
     
      // Clear form
      event.target.text.value = "";
      // Prevent default form submit
      return false;
     }
   
    });
    
    Accounts.ui.config({
      passwordSignupFields: "USERNAME_ONLY"
    });

  Template.newRoom.events({
   "click #submit": function (event, template) {
	    console.log("event trigered", $('#roomName').val());
		var room = $('#roomName').val();
                particepents.push(Meteor.user().username);
		 console.log(room);
     Meteor.call ('addRoom', room);
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
	      console.log('roomId');
	      return false;
	     }

	 } );
}

