messeges=new Mongo.Collection("messeges");
typing= new Mongo.Collection ("typing");  
  
   Meteor.startup(function () {
      typing.remove({});
      messeges.remove ({});
    
    });

 
  if (Meteor.isClient) {
    
     Meteor.subscribe("userData");
     Meteor.subscribe("typing")
     Meteor.subscribe("messeges");

  // This code only runs on the client

    Template.registerHelper('formatDate', function(date) {
      return moment(date).fromNow();
      });

    Template.body.helpers({

    msgs: function () {
     return messeges.find({});
    
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
            typeId= id;
        });
      },

     "blur .new-msg": function (event){
        Meteor.call("removeTyping", typeId);
      },
     "submit .new-msg": function (event) {
        Meteor.call("removeTyping", typeId);
      var message = event.target.text.value;

      Meteor.call("addMessage", message, function(error){
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
} // end of client 

Meteor.methods({
addMessage : function (text){
   if (! Meteor.userId()) {
throw new Meteor.Error("not-authorized");
}
  messeges.insert ({
    text: text, 
    createdAt: new Date(),
    owner: Meteor.userId(),           // _id of logged in user
    username: Meteor.user().username  // username of logged in user
  });

},
addTyping: function (name){

 return typing.insert ({name: name});

}, 
removeTyping: function (id){

  typing.remove(id);
}


});

if (Meteor.isServer){
  Meteor.publish("messeges",function(){
  return messeges.find();
  });
  
  Meteor.publish("userData", function () {
 
  return Meteor.users.find({});
  });

  Meteor.publish ("typing", function(){
    return typing.find();
  })
}
