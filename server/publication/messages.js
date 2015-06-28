if (Meteor.isServer)
{
  Meteor.publish("Messages",function(){
  return Messages.find();
});
}
