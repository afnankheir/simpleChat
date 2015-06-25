if (Meteor.isServer){
  Meteor.publish("messeges",function(){
  return messeges.find();
  });
}
