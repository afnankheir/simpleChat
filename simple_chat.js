messeges=new Mongo.Collection("messeges");
typing= new Mongo.Collection ("typing");  
 
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
      return typing.find({});
    },


    chatUsers: function (){
    return Meteor.users.find({});}
    });

    Template.body.events({
       
     "focus .new-msg": function (event){
      //boolean check if already exists
      //remove from collection after submit 
        usertyping = Meteor.user().username;
        typeId= typing.insert ({name: usertyping});
      },



     "submit .new-msg": function (event) {
      typing.remove(typeId);
      console.log(typeId);
      var text = event.target.text.value;
      var date = new Date;
      messeges.insert({
      text: text,
      createdAt: date,
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
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

  Meteor.publish ("typing", function(){
    return typing.find();
  })
}
