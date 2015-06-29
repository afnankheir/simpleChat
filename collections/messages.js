messeges=new Mongo.Collection("messeges");
Meteor.methods({
         addMessage : function (message,getRoomId){
		  if (! Meteor.userId())
		     {
			    throw new Meteor.Error("not-authorized");
		     }
		     messeges.insert (
		     {
			    text: message, 
			    createdAt: new Date(),
			    owner: Meteor.userId(),         
			    username:Meteor.user().username ,  
			    roomId:getRoomId
		      });

			  }
	   });

