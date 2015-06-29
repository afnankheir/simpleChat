Template.registerHelper('formatDate', function(date) 
  {
     return moment(date).fromNow();
  });
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
  
  Template.body.events
  ({     
      "focus .new-msg": function (event)
      {
        usertyping = Meteor.user().username;
        Meteor.call ("addtyping", usertyping, function(error, id){
        Session.set("typeId",id);
        });
      },
    "blur .new-msg": function (event)
      {
        Meteor.call("removetyping", Session.get('typeId'));
      },
    "submit .new-msg": function (event) 
      {
      Meteor.call("removetyping", Session.get ('typeId'));
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