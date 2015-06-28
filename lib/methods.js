Meteor.methods
({
    addMessage : function (message,getRoomId)
    {
      if (! Meteor.userId()) {
        throw new Meteor.Error("not-authorized");}
      Messages.insert ({
      text: message, 
      createdAt: new Date(),
      owner: Meteor.userId(),         
      username:Meteor.user().username ,  
      roomId:getRoomId
    });

  },

    addTyping: function (name){
      return Typing.insert ({name: name});
  },

    removeTyping: function (id){
      Typing.remove(id);
  },
    addRoom: function (name,names)
    {
      Rooms.insert({
      roomName: name,
      createdby: Meteor.userId(),
      admin: Meteor.user().username,
      particepents:names
      });
    }
});
