if(Meteor.isClient)
{
  particepents =[];
  Template.registerHelper('formatDate', function(date) 
  {
  return moment(date).fromNow();
  });

<<<<<<< HEAD

  Template.body.helpers
  ({
	 
      msgs: function () {
               roomID=Session.get('roomId');
               return messeges.find({roomId:roomID});
             },
      
      showRoomName : function () {
        
        var roomId = Session.get('roomId');
        return rooms.findOne({_id: roomId}).roomName;
      },
	   nowtyping: function()
      {
  	   currentUserName= Meteor.user().username;
  	   return typing.find({ name: { $ne: currentUserName}});
  	   }
  	});

  Template.newRoom.helpers
  ({
    chatusers: function ()
=======
  Template.body.helpers
  ({
	 
     msgs: function () 
    {
	   roomID=Session.get('roomId');
	   return Messages.find({roomId:roomID});
    },
	   nowTyping: function()
    {
	   currentUserName= Meteor.user().username;
	   return Typing.find({ name: { $ne: currentUserName}});
	   }
	});

  Template.newRoom.helpers
  ({
    chatUsers: function ()
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
    {
	   return Meteor.users.find({});
	  }
	}); 
  
<<<<<<< HEAD
  Template.rooms.helpers
  ({
	   rooms: function(){
		  return rooms.find({particepents: Meteor.user().username});
=======
  Template.Rooms.helpers
  ({
	   Rooms: function(){
		  return Rooms.find({particepents: Meteor.user().username});
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
	}});
  
  Template.body.events
  ({     
      "focus .new-msg": function (event)
      {
<<<<<<< HEAD
        usertyping = Meteor.user().username;
        Meteor.call ("addtyping", usertyping, function(error, id){
=======
        userTyping = Meteor.user().username;
        Meteor.call ("addTyping", userTyping, function(error, id){
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
        Session.set("typeId",id);
        });
      },
    "blur .new-msg": function (event)
      {
<<<<<<< HEAD
        Meteor.call("removetyping", Session.get('typeId'));
      },
    "submit .new-msg": function (event) 
      {
      Meteor.call("removetyping", Session.get ('typeId'));
=======
        Meteor.call("removeTyping", Session.get('typeId'));
      },
    "submit .new-msg": function (event) 
      {
      Meteor.call("removeTyping", Session.get ('typeId'));
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
      var message = event.target.text.value;
      var getRoomId = Session.get('roomId');
      Meteor.call("addMessage", message,getRoomId, function(error)
      {
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

  Template.newRoom.events
  ({
     "click #submit": function (event, template) 
    {
	    console.log("event trigered", $('#roomName').val());
		  var room = $('#roomName').val();
      particepents.push(Meteor.user().username);
		  console.log(room);
      Meteor.call ('addRoom', room,particepents);
    },
   
   "click .toggle-checked": function (event) 
   {
      var particepent = event.target.value;
      console.log(particepent);
      particepents.push(particepent);
    } 
    });

<<<<<<< HEAD
Template.rooms.events({
	"submit .roomId": function (event){
	      var roomId = event.target.room_id.value;
	      Session.set('roomId',roomId);
        
	      console.log('roomId');
	      return false;
	     }
	   });
}
=======
    Template.Rooms.events
    ({
	   "submit .roomId": function (event)
      {
	     var roomId = event.target.room_id.value;
	     Session.set('roomId',roomId);
	     console.log('roomId');
	     return false;
	     }
	   });
}
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf