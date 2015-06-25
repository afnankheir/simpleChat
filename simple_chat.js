messeges=new Mongo.Collection("messeges");
typing= new Mongo.Collection ("typing");  
  
  if (Meteor.isClient) {

     Meteor.subscribe("userData");
     Meteor.subscribe("typing")
     Meteor.subscribe("messeges");
     Meteor.subscribe("rooms");
     
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
      getRoomId = Session.get('roomId');
      Meteor.call("addMessage", message,getRoomId, function(error)
      {
        if(error) console.log("---------------- submit error ---------",error);
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

Meteor.methods({
addMessage : function (message, roomId){
//    if (! Meteor.userId()) {
// throw new Meteor.Error("not-authorized");
// }
  messeges.insert ({
    text: message, 
    createdAt: new Date(),
    owner: Meteor.userId(),           // _id of logged in user
    username: Meteor.user().username ,   // username of logged in user
    roomId: roomId
  });
},
addTyping: function (name){

 return typing.insert ({name: name});

}, 
removeTyping: function (id){

  typing.remove(id);
},


});

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
