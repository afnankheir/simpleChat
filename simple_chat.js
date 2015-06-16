messeges=new Mongo.Collection("messeges");
if(meteor.isClient)
{
   Meteor.publish("messeges",function(){
     return Tasks.find();
   }
   );
  "submit .new-msg": function (event) {
        var text = event.target.text.value;
        messeges.insert({
        text: text,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username 
          });
   Accounts.ui.config({
       passwordSignupFields: "USERNAME_ONLY"
     });
   }

   if(meteor.isServer)
   {
     Meteor.subscribe("messeges");
   }
