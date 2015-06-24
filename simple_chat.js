messeges=new Mongo.Collection("messeges");
typing= new Mongo.Collection ("typing");  
  
   Meteor.startup(function () {
      typing.remove({});
    
    });

 
  if (Meteor.isClient) {
    
     Meteor.subscribe("userData");
     Meteor.subscribe("typing")
     Meteor.subscribe("messeges");
     Meteor.subscribe("rooms")
  // This code only runs on the client

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

    Template.body.events({
       
     "focus .new-msg": function (event){
        usertyping = Meteor.user().username;
        typeId= typing.insert ({name: usertyping});
      },

     "blur .new-msg": function (event){
        typing.remove(typeId);
      },
     "submit .new-msg": function (event) {
      typing.remove(typeId);
      var text = event.target.text.value;
      var date = new Date;
      messeges.insert({
      text: text,
      createdAt: date,
      owner: Meteor.userId(),          
      username: Meteor.user().username,
      roomId:Session.get('roomId')  
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
} // end of client 

if (Meteor.isServer){
  Meteor.publish("messeges",function(){
  return messeges.find();
  });
  
  Meteor.publish("userData", function () {
 
  return Meteor.users.find({});
  });
   Meteor.publish("rooms", function() {
    return rooms.find({});
   });
  Meteor.publish ("typing", function(){
    return typing.find();
  })
}
