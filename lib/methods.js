Meteor.methods({
addMessage : function (message,getRoomId){
   if (! Meteor.userId()) {
throw new Meteor.Error("not-authorized");
}
  messeges.insert ({
    text: message, 
    createdAt: new Date(),
    owner: Meteor.userId(),         
    username:Meteor.user().username ,  
    roomId:getRoomId
  });

},
addTyping: function (name){

 return typing.insert ({name: name});

}, 
removeTyping: function (id){

  typing.remove(id);
},
addRoom: function (name,names){
      rooms.insert({
          roomName: name,
          createdby: Meteor.userId(),
          admin: Meteor.user().username,
          particepents:names
      });

}
});
