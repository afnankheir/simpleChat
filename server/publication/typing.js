  if(Meteor.isServer)
{
  Meteor.publish ("Typing", function(){
  return Typing.find();
  });
}
