  Template.newRoom.helpers
  ({
    chatusers: function ()
    {
     return Meteor.users.find({});
    }
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
